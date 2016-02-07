defmodule Askwer.UserChannel do
  use Askwer.Web, :channel

  def join("users:" <> user_id, _params, socket) do
    {:ok, socket}
  end
end
