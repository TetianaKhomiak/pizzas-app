import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/pizzas-app/">Login</Link>
        <Link to="/pizzas-app/menu">Menu</Link>
        <Link to="/pizzas-app/cart">Cart</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
