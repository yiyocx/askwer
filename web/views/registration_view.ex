defmodule Askwer.RegistrationView do
  use Askwer.Web, :view

  @doc """
  This view handle errors for signup process through render function
  and returns as an array instead of an object to show them in the frontend side
  """
  def render("error.json", %{changeset: changeset}) do
    # traverse_errors helps to do changeset errors serializable and encodable
    # in a json response.
    # translate_error is an error helper function that makes life easier!
    changeset = Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
    errors = Enum.map(changeset, fn {field, detail} ->
      Map.put(%{}, field, detail)
    end)

    %{errors: errors}
  end
end
