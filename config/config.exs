# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :askwer, Askwer.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "kuQ/9vRboPu+gsYDW36lV0fixmqDFv/tzIGYFHxUf8kgdqeZ4nSndfWhEiDzFOUN",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Askwer.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :guardian, Guardian,
  issuer: "Askwer",
  ttl: { 5, :days },
  verify_issuer: true,
  secret_key: "ashraihfasjfpoasjfasojasfk",
  serializer: Askwer.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
