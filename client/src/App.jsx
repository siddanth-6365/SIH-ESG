import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { RankingPage } from "./Components/Ranking/RankingPage";
import { HomePage } from "./Components/Home/HomePage";
import { Parameter } from "./Components/Parameters/Parameter";
import { NewsletterPage } from "./Components/Newsletter/NewsletterPage";
import { faqsPage as FAQSPage } from "./Components/FAQS/faqsPage";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import FormApp from "./Components/Forms/FormApp";

function App() {
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
          <Route path="/dashboard/:id" element={ <Dashboard />} />
          <Route path="/form" element={ <FormApp />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
