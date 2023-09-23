import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function WasteManagement() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/greenhouse");
    };
  return (
    <div>
      <h2>Waste Management Information Form</h2>
      <form>
        <h3>Enter the following data for 2022</h3>
        <label>Material Recycled:</label>
        <input type="text" name="materialRecycled1" /><br/><br/>

        <label>Material Composted:</label>
        <input type="text" name="materialCompostedYear1"/><br/><br/>

        <label>Material donated or re-sold:</label>
        <input type="text" name="donatedYear1"/><br/><br/>

        <label>Materials disposed in a solid waste landfill or incinerator:</label>
        <input type="text" name="landfillYear1"  /><br/><br/>

        <label>Materials disposed through post-recycling residual conversion:</label>
        <input type="text" name="residualYear1" /><br/><br/>

        <h3>Enter the following data for 2023</h3>
        <label>Material Recycled:</label>
        <input type="text" name="materialRecycledYear2"  /><br/><br/>

        <label>Material Composted:</label>
        <input type="text" name="materialCompostedYear2"  /><br/><br/>

        <label>Material Donated or re-sold:</label>
        <input type="text" name="donatedYear2"  /><br/><br/>

        <label>Materials disposed in a solid waste landfill or incinerator:</label>
        <input type="text" name="landfillYear2"  /><br/><br/>

        <label>Materials disposed through post-recycling residual conversion:</label>
        <input type="text" name="residualYear2"  /><br/><br/>

        <button onClick={handleClick}>Next</button>
      </form>
    </div>
  );
}

export default WasteManagement;