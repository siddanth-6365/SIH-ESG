import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function GreenHouse()
{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/renewable");
    };
    return(
        <div>
        <h2>Gross Scope 1 and Scope 2 greenhouse gas (GHG) emissions Form</h2>
      <form>
        <h3>Enter the following data for 2022</h3>
        <label>Gross Scope 1 GHG emissions from stationary combustion: </label>
        <input type="text"/><br/><br/>

        <label>Gross Scope 1 GHG emissions from other sources: </label>
        <input type="text"/><br/><br/>

<label>Gross Scope 2 GHG emissions from imported electricity: </label>
        <input type="text" /><br/><br/>

<label>Gross Scope 2 GHG emissions from imported thermal energy: </label>
        <input
          type="text"
        /><br/><br/>
        <h3>Enter the following data for 2023</h3><br/>
        <label>Gross Scope 1 GHG emissions from stationary combustion: </label>
        <input
          type="text"
        /><br/><br/>

        <label>Gross Scope 1 GHG emissions from other sources: </label>
        <input
          type="text"
        /><br/><br/>

<label>Gross Scope 2 GHG emissions from imported electricity: </label>
        <input
          type="text"
        /><br/><br/>

<label>Gross Scope 2 GHG emissions from imported thermal energy: </label>
        <input
          type="text"
        /> <br/><br/>
        <p>Do you have a formal plan to mitigate green house emissions?</p> 
        <input type="text" name="yes" placeholder="yes/no"/><br/><br/>

        <p>Has your institution completed an inventory within the previous three years to quantify its air pollutant emissions?:</p> 
        <input type="text" name="yes" placeholder="yes/no"/><br/><br/>

        <p>A brief description of your institution’s GHG emissions reduction initiatives:</p> 
        <textarea placeholder="enter here"/><br/><br/>

        <button onClick={handleClick}>Next</button>
      </form>
    </div>
    );
}

export default GreenHouse;