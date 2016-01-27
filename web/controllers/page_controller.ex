defmodule Askwer.PageController do
  use Askwer.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
