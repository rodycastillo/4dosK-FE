import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReduce";

const AppInitialValues = {
  step_one: true,
  step_two: false,
  step_three: false,
  step_four: false,
};

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [state, action] = useReducer(AppReducer, AppInitialValues);

  return (
    <AppContext.Provider value={{ ...state, action }}>
      {children}
    </AppContext.Provider>
  );
};
