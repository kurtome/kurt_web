defmodule KurtWeb.PageView do
  use KurtWeb, :view

  def selected_css_class(conn, path, css_class) do
    request_path = URI.decode(conn.request_path)

    if request_path == path do
      css_class
    else
      nil
    end
  end
end
