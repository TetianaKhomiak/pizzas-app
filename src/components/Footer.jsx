import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IsCheckedContext } from "../context/IsCheckedProvider.jsx";
import { PizzaContext } from "../context/PizzaProvider.jsx";
import "../styles/footer.css";

const Footer = () => {
  const { state } = useContext(PizzaContext);
  const { isChecked } = useContext(IsCheckedContext);

  const sum = (state.totalPrice + 8).toFixed(2);

  return (
    <div className="footer__wrapper">
      <div className="footer__el">
        <p>{state.totalItems}</p>
        {state.totalItems === 1 ? <p>PIZZA</p> : <p>PIZZAS</p>}
        {isChecked ? <p>€{sum}</p> : <p>€{state.totalPrice.toFixed(2)}</p>}
      </div>
      <Link className="footer__link" to="/cart">
        OPEN CART →
      </Link>
    </div>
  );
};

export default Footer;
