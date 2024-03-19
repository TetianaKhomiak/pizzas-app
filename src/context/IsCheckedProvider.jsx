import React, { createContext, useState } from "react";

export const IsCheckedContext = createContext(null);

const IsCheckedProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const isCheckedValue = {
    isChecked,
    setIsChecked,
  };

  return (
    <IsCheckedContext.Provider value={isCheckedValue}>
      {children}
    </IsCheckedContext.Provider>
  );
};

export default IsCheckedProvider;
