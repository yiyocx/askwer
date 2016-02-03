defmodule Askwer.SessionView do
  use Askwer.Web, :view

  @doc """
  This view handle errors for signup process through render function
  and returns as an array instead of an object to show them in the frontend side
  """
  def render("error.json", %{error: error}) do
    %{error: error}
  end

  def render("forbidden.json", %{error: error}) do
    %{error: error}
  end
end
