defmodule Askwer.SessionController do
  use Askwer.Web, :controller

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{"session" => session_params}) do
    case Askwer.Session.authenticate(session_params) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = user |> Guardian.encode_and_sign(:token)
        conn
        |> put_status(:created)
        |> render(Askwer.UserView, "show.json", user: user, jwt: jwt)
      {:error, message} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Askwer.SessionView, "error.json", error: message)
    end
  end

  def unauthenticated(conn, _params) do
    conn
    |> put_status(:forbidden)
    |> render(Askwer.SessionView, "forbidden.json", error: "Not Authenticated")
  end
end
