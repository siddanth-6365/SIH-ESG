import { useNavigate } from "react-router-dom";

function CollegeDetails() {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/campususer");
  };
  
  return (
    <div>
      <h2>College Information Form</h2>
      <form>
        <label>College Name:</label>
        <input
          type="text"
          name="collegeName"
        /><br/>
        <label>College Address</label>
        <input
          type="text"
          name="collgaddress"
        /><br/>
        <label>College Id:</label>
        <input
          type="text"
          name="collegeid"
        /><br/><br/>
       <button onClick={handleClick}>next</button>
      </form>
    </div>
  );
}

export default CollegeDetails;
