import React from "react";
//import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Renewable()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate("/sustainable");
    };
    return(
        <div>
            <h2>Electricity use, performance year (report kilowatt-hours):</h2>
            <form>
                <h3>Enter the following data</h3>
                <label name="imported">Imported electricity(in kWh): </label>
                <input type="text"/><br/><br/>

                <label name="imported">Electricity from on-site, non-combustion facilities/devices (e.g., renewable energy systems imported steam, hot water, and/or chilled water): </label>
                <input type="text"/><br/><br/>

                <p>Total site energy consumption, performance year:</p>
                <input type="text" placeholder="in MMBtu"/><br/><br/>

                <p>Gross floor area of building space, performance year:</p>
                <input type="text" placeholder="in Square Feet"/><br/><br/>

                <p>A brief description of passive solar heating, geothermal systems, and related strategies employed by your institution:</p>
                <textarea/>
            </form>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default Renewable;