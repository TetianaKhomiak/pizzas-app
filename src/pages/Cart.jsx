import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { PizzaContext } from "../context/PizzaProvider.jsx";
import { UserContext } from "../context/UserNameProvider.jsx";
import "../styles/cart.css";

const Cart = () => {
  const { state, dispatch } = useContext(PizzaContext);
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDecrement = (id) => {
    dispatch({
      type: "DECREMENT_PIZZA",
      payload: id,
    });
  };

  const handleIncrement = (id) => {
    dispatch({
      type: "INCREMENT_PIZZA",
      payload: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PIZZA",
      payload: id,
    });
  };

  const handleClearingCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const handleOrder = () => {
    navigate("/order/new");
  };

  const formattedUserName =
    userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div>
      <div className="cart__wrapper">
        <Header className="cart__header" />
      </div>
      <div className="cart">
        <Link className="cart__link" to="/menu">
          ← Back to menu
        </Link>
        {state.items.length === 0 ? (
          <p className="cart__message">
            Your cart is still empty. Start adding some pizzas :)
          </p>
        ) : (
          <>
            <h1 className="cart__title">Your cart, {formattedUserName}</h1>
            <div>
              {state.items.map((item) => (
                <div className="cart__order" key={item.id}>
                  <p className="cart__order_element">
                    {item.qty}× {item.name}
                  </p>
                  <div className="cart__order_wrapper">
                    <p className="cart__total">
                      €{item.totalPriceOfItem.toFixed(2)}
                    </p>
                    <button
                      className="cart__btn_counter"
                      onClick={() => handleDecrement(item.id)}>
                      -
                    </button>
                    <p className="cart__order_element">{item.qty}</p>
                    <button
                      className="cart__btn_counter"
                      onClick={() => handleIncrement(item.id)}>
                      +
                    </button>
                    <button
                      className="cart__btn_delete"
                      onClick={() => handleDelete(item.id)}>
                      DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__btn_wrapper">
              <button className="cart__btn_order" onClick={handleOrder}>
                ORDER PIZZAS
              </button>
              <button className="cart__btn_clear" onClick={handleClearingCart}>
                CLEAR CART
              </button>
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
