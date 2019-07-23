defmodule KurtWeb.PageView do
  use KurtWeb, :view

  def selected_css_class(conn, path) do
    if conn.request_path == path do
      "selected"
    else
      nil
    end
  end
end
