import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Menu from "./pages/Menu.jsx";
import Login from "./pages/Login.jsx";
import Order from "./pages/Order.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import OrderNotFound from "./pages/OrderNotFound.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import IsCheckedProvider from "./context/IsCheckedProvider.jsx";
import OrderDetailsProvider from "./context/OrderDetailsProvider.jsx";
import OrderSearch from "./context/OrderSearchProvider.jsx";
import PizzaProvider from "./context/PizzaProvider.jsx";
import UserNameProvider from "./context/UserNameProvider.jsx";

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
      {
        path: "/pizzas-app/order/new",
        element: <Order />,
      },
      {
        path: "/pizzas-app/order/:id",
        element: <OrderDetails />,
      },
      {
        path: "/pizzas-app/order/not-found",
        element: <OrderNotFound />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <IsCheckedProvider>
        <OrderDetailsProvider>
          <OrderSearch>
            <UserNameProvider>
              <RouterProvider router={router} />
            </UserNameProvider>
          </OrderSearch>
        </OrderDetailsProvider>
      </IsCheckedProvider>
    </PizzaProvider>
  </React.StrictMode>
);
