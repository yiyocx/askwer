defmodule Askwer.SessionController do
  use Askwer.Web, :controller

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{"session" => session_params}) do
    case Askwer.Session.authenticate(session_params) do
      {:ok, user} ->
        Guardian.Plug.sign_in(conn, user)
        conn
        |> put_status(:created)
        |> render(Askwer.RegistrationView, "show.json", user: user)
      :error ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Askwer.SessionView, "error.json")
    end
  end
end
