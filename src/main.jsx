import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './styles/main.sass'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./routes/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/portifolio/",
    element: <App />,
  },
  {
    path: "/portifolio/projects",
    element: <Project />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
