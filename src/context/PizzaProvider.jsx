import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducer/reducer.jsx";
import { useLocalStorage } from "@uidotdev/usehooks";

export const PizzaContext = createContext(null);

const PizzaProvider = ({ children }) => {
  const [savedState, setSavedState] = useLocalStorage(
    "pizzaAppState",
    initialState
  );
  const [state, dispatch] = useReducer(reducer, savedState);

  useEffect(() => {
    setSavedState(state);
  }, [state, setSavedState]);

  return (
    <PizzaContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
