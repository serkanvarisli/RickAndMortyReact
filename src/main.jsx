import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bolumler from "./pages/Bolumler";
import Karakterler from "./pages/Karakterler";
import "./style/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bolumler",
    element: <Bolumler />,
  },
  {
    path: "/karakterler",
    element: <Karakterler />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
