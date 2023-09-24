import React, { createContext, useContext, useState } from "react";

const ParameterContext = createContext();

export function useParameterContext() {
  return useContext(ParameterContext);
}

export function ParameterProvider({ children }) {
  const [parameters, setParameters] = useState([]);
  const [collegeInfo, setCollegeInfo] = useState({}); 
  const [CampusUsers, setCampusUsers] = useState({}); 


  const addParameter = (parameter) => {
    setParameters([...parameters, parameter]);
  };

  const updateCollegeInfo = (info) => {
    setCollegeInfo(info);
  };

  const addCampusUsers = (val) => {
    setCampusUsers(val);
  };


  return (
    <ParameterContext.Provider value={{ parameters, addParameter, collegeInfo, updateCollegeInfo,addCampusUsers }}>
      {children}
    </ParameterContext.Provider>
  );
}
