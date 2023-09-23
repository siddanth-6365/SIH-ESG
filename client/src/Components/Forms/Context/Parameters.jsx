import React, { createContext, useContext, useState } from "react";

const ParameterContext = createContext();

export function useParameterContext() {
  return useContext(ParameterContext);
}

export function ParameterProvider({ children }) {
  const [parameters, setParameters] = useState([]);

  const addParameter = (parameter) => {
    setParameters([...parameters, parameter]);
  };

  // Add other functions to modify parameters as needed

  return (
    <ParameterContext.Provider value={{ parameters, addParameter }}>
      {children}
    </ParameterContext.Provider>
  );
}
