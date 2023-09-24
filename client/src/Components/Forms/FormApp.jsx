import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import WasteManagement from "./WasteManagement";
import CollegeDetails from "./CollegeDetails";
import GreenHouse from "./GreenHouse";
import CampusUsers from "./CampusUsers";
import Renewable from "./Renewable";
import Sustainable from "./Sustainable";
import Water from "./Water";
import Student from "./Student";
import Griha from "./Griha";
import { ParameterProvider } from "./Context/Parameters";

function FormApp() {
    return (
        <>
     
      <ParameterProvider>
        <Routes>
          <Route path="/" element={<Outlet />}>
            {/* Display CollegeDetails component at /form */}
            <Route index element={<CollegeDetails />} />
            {/* Display WasteManagement component at /form/waste */}
            <Route path="waste" element={<WasteManagement />} />
            {/* Display CampusUsers component at /form/campususer */}
            <Route path="campususer" element={<CampusUsers />} />
            <Route path="greenhouse" element={<GreenHouse />} />
            <Route path="renewable" element={<Renewable />} />
            <Route path="sustainable" element={<Sustainable />} />
            <Route path="water" element={<Water />} />
            <Route path="student" element={<Student />} />
            <Route path="griha" element={<Griha />} />
            {/* Add more nested routes as needed */}
          </Route>
        </Routes>
      </ParameterProvider>
      </>
    );
  }
  
  export default FormApp;
  
