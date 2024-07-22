// pages/context/StepperContext.js
import React, { createContext, useContext, useState } from "react";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [stepData, setStepData] = useState({
    plan: {
      name: "", // Ensure initial state has default values
      price: 0,
    },
    billingCycle: "monthly",
    addons: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  return (
    <StepperContext.Provider value={{ stepData, setStepData }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
