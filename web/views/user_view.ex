defmodule Askwer.UserView do
  use Askwer.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Askwer.UserView, "user.json")}
  end

  def render("show.json", %{user: user, jwt: jwt}) do
    %{jwt: jwt, user: user}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      name: user.name,
      email: user.email,
     }
  end
end
