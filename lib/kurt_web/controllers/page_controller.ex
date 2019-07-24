defmodule KurtWeb.PageController do
  use KurtWeb, :controller

  def index(conn, params) do
    conn
    |> assign(:content_template, content_template(params))
    |> render("index.html")
  end

  def content_template(params) do
    case params["slug"] do
      "whoami" -> "_whoami.html"
      "résumé" -> "_resume.html"
      "projects" -> "_projects.html"
      "etcetera" -> "_etcetera.html"
      _ -> nil
    end
  end
end
