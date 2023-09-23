import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <ParameterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CollegeDetails />}></Route>
          <Route path="/form/waste" element={<WasteManagement />}></Route>
          <Route path="/form/campususer" element={<CampusUsers />}></Route>
          <Route path="/form/greenhouse" element={<GreenHouse />}></Route>
          <Route path="/form/renewable" element={<Renewable />}></Route>
          <Route path="/form/sustainable" element={<Sustainable />}></Route>
          <Route path="/form/water" element={<Water />}></Route>
          <Route path="/form/student" element={<Student />}></Route>
          <Route path="/form/griha" element={<Griha />}></Route>
        </Routes>
      </Router>
    </ParameterProvider>
  );
}

export default FormApp;
