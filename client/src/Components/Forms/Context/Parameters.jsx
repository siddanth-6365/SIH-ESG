import React, { createContext, useContext, useState } from "react";

const ParameterContext = createContext();

export function useParameterContext() {
  return useContext(ParameterContext);
}

export function ParameterProvider({ children }) {
  const [parameters, setParameters] = useState([{}]);
  const [collegeInfo, setCollegeInfo] = useState({}); 
  const [CampusUsers, setCampusUsers] = useState(0); 


  const addParameter = (parameter) => {
    setParameters((prevParameters) => [...prevParameters, parameter]);
   
  };
  

  const setCollegeInfofun = (info) => {
    setCollegeInfo(info);
    
  };

  const addCampusUsers = (val) => {
    setCampusUsers(val);
  };


  return (
    <ParameterContext.Provider value={{ parameters, addParameter, setCollegeInfo, setCollegeInfofun,CampusUsers,addCampusUsers }}>
      {children}
    </ParameterContext.Provider>
  );
}
