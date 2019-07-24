defmodule KurtWeb.PageView do
  use KurtWeb, :view

  def selected_css_class(conn, path) do
    request_path = URI.decode(conn.request_path)

    if request_path == path do
      "selected"
    else
      nil
    end
  end
end
