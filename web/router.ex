defmodule Askwer.Router do
  use Askwer.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
  end

  # Other scopes may use custom stacks.
  scope "/api", Askwer do
    pipe_through :api

    post "/registration", RegistrationController, :create
    post "/session", SessionController, :create
    delete "/session", SessionController, :delete
  end

  scope "/", Askwer do
    pipe_through :browser # Use the default browser stack

    get "*path", PageController, :index
  end
end
