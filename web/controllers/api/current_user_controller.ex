defmodule Askwer.CurrentUserController do
  use Askwer.Web, :controller

  plug Guardian.Plug.EnsureAuthenticated, handler: Askwer.SessionController

  def show(conn, _) do
    case decode_and_verify_token(conn) do
      {:ok, _claims} ->
        user = Guardian.Plug.current_resource(conn)
        conn
        |> put_status(:ok)
        |> render(Askwer.UserView ,"user.json", user: user)
      {:error, _reason} ->
        conn
        |> put_status(:not_found)
        |> render(Askwer.SessionView, "error.json", error: "Not Found")
    end
  end

  defp decode_and_verify_token(conn) do
    conn
    |> Guardian.Plug.current_token
    |> Guardian.decode_and_verify
  end
end
