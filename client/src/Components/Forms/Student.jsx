
//import { BrowserRouter as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Student()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate("/griha");
    };
    return(
        <div>
            <h2> Does the institution have an active student group focused on sustainability? - Events conducted and frequency of such events</h2>
            <label>Number of students enrolled for credit:</label>
            <input type="text"/><br/><br/>

            <label>Total number of students served by a peer-to-peer sustainability outreach and education program:</label>
            <input type="text"/><br/><br/>

            <p>Percentage of students served by a peer-to-peer sustainability outreach and education program:</p>
            <input type="text" name="yes"/><br/><br/>

            <p>A brief description of the student educators program (1st program):</p>
            <textarea placeholder="enter here"/><br/><br/>

            <p>Does the institution have an active student group focused on sustainability?:</p>
            <input type="radio" name="yes"/>yes
            <input type="radio" name="yes"/>no
            <form>
                
                
            </form><br/>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
export default Student;