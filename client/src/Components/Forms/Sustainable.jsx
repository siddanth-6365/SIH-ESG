import React from "react";
import { useNavigate } from "react-router-dom";
function Sustainable()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate("/water");
    };
    return(
        <div>
            <h2> Invest in sustainable research - Amount and achievements</h2>
            <form>
                
                <label name="imported">Does the institution have an ongoing program to encourage students in multiple disciplines or academic programs to conduct sustainability research?:</label>
                <input type="text"/><br/><br/>

                <label name="imported">Does the institution have a program to encourage academic staff from multiple disciplines or academic programs to conduct sustainability research?: </label>
                <input type="text"/><br/><br/>

                <p>A brief description of the student sustainability research program:</p>
                <textarea/><br/><br/>

                <h3>Value of holdings in each of the following categories</h3>
                <label type="text">Sustainable industries (e.g., renewable energy or sustainable forestry): </label>
                <input type="text" placeholder=""/><br/><br/>

                <label type="text">Businesses selected for exemplary sustainability performance (e.g., using criteria specified in a sustainable investment policy) </label>
                <input type="text" placeholder=""/><br/><br/>
                <label type="text">Sustainability investment funds (e.g., a renewable energy or impact investment fund): </label>
                <input type="text" placeholder=""/><br/><br/>

                <label>Total Budget:</label><input type="text"/>
            </form><br/>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default Sustainable;