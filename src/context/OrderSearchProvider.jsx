import React, { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const OrderSearchContext = createContext(null);

const OrderSearchProvider = ({ children }) => {
  const [orderId, setOrderId] = useLocalStorage("orderId", []);

  const orderIdValue = {
    orderId,
    setOrderId,
  };

  return (
    <OrderSearchContext.Provider value={orderIdValue}>
      {children}
    </OrderSearchContext.Provider>
  );
};

export default OrderSearchProvider;
