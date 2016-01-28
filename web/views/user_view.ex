defmodule Askwer.UserView do
  use Askwer.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Askwer.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Askwer.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      email: user.email,
      crypted_password: user.crypted_password}
  end
end
