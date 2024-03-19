import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import Button from "./Button";

const Counter = ({ id }) => {
  const { state, dispatch } = useContext(PizzaContext);
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

  const handleReset = (id) => {
    dispatch({
      type: "RESET_PIZZA",
      payload: id,
    });
  };

  const counter = state.items.find((item) => item.id === id)?.qty;

  return (
    <div className="pizza__counter_counter">
      <Button
        className="pizza__btn_counter"
        onClick={() => handleDecrement(id)}
        text="-"
      />
      <span>{counter}</span>

      <Button
        className="pizza__btn_counter"
        onClick={() => handleIncrement(id)}
        text="+"
      />
      <Button
        className="pizza__btn_delete"
        onClick={() => handleReset(id)}
        text="RESET"
      />
    </div>
  );
};

export default Counter;
