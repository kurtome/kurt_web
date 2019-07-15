defmodule KurtWeb.PageController do
  use KurtWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
