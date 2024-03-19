import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Menu from "./pages/Menu.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/pizzas-app/",
    element: <App />,
    children: [
      {
        path: "/pizzas-app/",
        element: <Login />,
      },
      {
        path: "/pizzas-app/menu",
        element: <Menu />,
      },
      {
        path: "/pizzas-app/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
