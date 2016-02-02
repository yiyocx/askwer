defmodule Askwer.SessionController do
  use Askwer.Web, :controller

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{"session" => session_params}) do
    case Askwer.Session.authenticate(session_params) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user, :token)
        conn
        |> put_status(:created)
        |> render(Askwer.UserView, "show.json", user: user, jwt: jwt)
      :error ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Askwer.SessionView, "error.json")
    end
  end
end
