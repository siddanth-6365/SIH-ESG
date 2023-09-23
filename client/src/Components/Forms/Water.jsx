import React from "react";
//import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Water()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate("/student");
    };
    return(
        <div>
            <h2> Water use data and whether proper methods are employed to control excess</h2>
            <label>Total water withdrawal (potable and non-potable combined):</label>
            <input type="text" placeholder="Performance Year"/>
            <input type="text" placeholder="Baseline Year"/><br/><br/>

            <label>Potable water use per weighted campus user:</label>
            <input type="text" placeholder="Performance Year"/>
            <input type="text" placeholder="Baseline Year"/><br/><br/>

            <p>Has your institute utilized sustainable resources for water consumption?</p>
            <input type="radio" name="yes"/>yes
            <input type="radio" name="yes"/>no<br/><br/>

            <p>If yes, describe the sources: </p>
            <textarea placeholder="enter here"/>

            <form>
                
                
            </form><br/>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default Water;