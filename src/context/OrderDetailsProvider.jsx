import React, { createContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const OrderDetailsContext = createContext(null);

const OrderDetailsProvider = ({ children }) => {
  const [dataResponse, setDataResponse] = useLocalStorage("dataResponse", {});

  const orderValue = {
    dataResponse,
    setDataResponse,
  };

  useEffect(() => {}, [dataResponse]);

  return (
    <OrderDetailsContext.Provider value={orderValue}>
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
