defmodule Askwer.SessionView do
  use Askwer.Web, :view

  @doc """
  This view handle errors for signup process through render function
  and returns as an array instead of an object to show them in the frontend side
  """
  def render("error.json", _) do
    %{error: "Invalid email or password"}
  end
end
