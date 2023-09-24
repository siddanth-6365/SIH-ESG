// App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { RankingPage } from "./Components/Ranking/RankingPage";
import { HomePage } from "./Components/Home/HomePage";
import  Parameter  from "./Components/Parameters/Parameter";
import  NewsletterPage  from "./Components/Newsletter/NewsletterPage";
import { faqsPage as FAQSPage } from "./Components/FAQS/faqsPage";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import WasteManagement from "./Components/Forms/WasteManagement";
import CollegeDetails from "./Components/Forms/CollegeDetails";
import GreenHouse from "./Components/Forms/GreenHouse";
import CampusUsers from "./Components/Forms/CampusUsers";
import Renewable from "./Components/Forms/Renewable";
import Sustainable from "./Components/Forms/Sustainable";
import Water from "./Components/Forms/Water";
import Student from "./Components/Forms/Student";
import Griha from "./Components/Forms/Griha";
import { ParameterProvider } from "./Components/Forms/Context/Parameters";
import axios from "axios"


function App() {
  axios.defaults.baseURL = "http://localhost:3030";
  axios.defaults.withCredentials = true;
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/faqs" element={<FAQSPage />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/form" element={
            <ParameterProvider>
              <Outlet />
            </ParameterProvider>
          }>
            <Route index element={<CollegeDetails />} />
            <Route path="waste" element={<WasteManagement />} />
            <Route path="campususer" element={<CampusUsers />} />
            <Route path="greenhouse" element={<GreenHouse />} />
            <Route path="renewable" element={<Renewable />} />
            <Route path="sustainable" element={<Sustainable />} />
            <Route path="water" element={<Water />} />
            <Route path="student" element={<Student />} />
            <Route path="griha" element={<Griha />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
