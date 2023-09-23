import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CampusUsers(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/waste");
    };
  return (
    <div>
      <h2>Weighted Campus Users Form</h2>
      <form>
        <h3>Enter the following data for 2022</h3>
        <label>Number of students resident on-site:</label>
        <input
          type="text"
          name="student1"
        /><br/><br/>

        <label>Number of employeess resident on-site</label>
        <input
          type="text"
          name="employee1"
        /><br/><br/>

<label>Number of other individuals resident on-site</label>
        <input
          type="text"
          name="other1"
        /><br/><br/>

<label>Total full-time equivalent student enrollment</label>
        <input
          type="text"
          name="fullStudent1"
        /><br/><br/>

<label>Full-time equivalent of employees</label>
        <input
          type="text"
          name="fullemployee1"
        /><br/><br/>

        
        <h3>Enter the following data for 2023</h3><br/>
        <label>Number of students resident on-site:</label>
        <input
          type="text"
          name="student2"
        /><br/><br/>

        <label>Number of employeess resident on-site</label>
        <input
          type="text"
          name="employee2"
        /><br/><br/>

<label>Number of other individuals resident on-site</label>
        <input
          type="text"
          name="other2"
        /><br/><br/>

<label>Total full-time equivalent student enrollment</label>
        <input
          type="text"
          name="fullStudent2"
        /><br/><br/>

<label>Full-time equivalent of employees</label>
        <input
          type="text"
          name="fullemployee2"
        /><br/><br/>
        <button onClick={handleClick}>Next</button>
      </form>
    </div>
  );
};

export default CampusUsers;
