import React from "react";
//import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Griha()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };
    return(
        <div>
            <h2>Building Design and Construction - Compliance with green norms</h2>
            <form>
            <label><a href="https://www.grihaindia.org/griha-rating">GRIHA RATING SYSTEM POINTS</a>:</label>
            <input type="text"/><br/><br/>

            <label>Percentage of newly constructed or renovated building space certified under a green building rating system for design and construction:</label>
            <input type="text"/><br/><br/>
                
                
            </form><br/>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default Griha;