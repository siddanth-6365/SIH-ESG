import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParameterContext } from "./Context/Parameters";
import axios from "axios";

function Griha() {
  const navigate = useNavigate();
  const { addParameter, parameters, collegeInfo } = useParameterContext();

  const [formData, setFormData] = useState({
    grihaRatingPoints: "",
    percentageCertifiedSpace: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    let score =
      formData.grihaRatingPoints / 10 + formData.percentageCertifiedSpace / 10;
    const grihaData = {
      name: "GRIHA",
      Score: score,
    };

    addParameter(grihaData);

    // connect with api :
    console.log("parameter :", parameters, " college :", collegeInfo);
    
    collegeInfo.push(parameters);

    axios
      .post("/api/colleges/create", collegeInfo)
      .then((response) => {
        console.log(response.data.message); // College created successfully
      })
      .catch((error) => {
        console.error("Error creating college:", error);
      });

    alert("done, your college registered successfully, thanks you");

    navigate("/");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mt-8">
        Building Design and Construction - Compliance with green norms
      </h2>
      <form>
        <label className="block mt-4">
          <a href="https://www.grihaindia.org/griha-rating">
            GRIHA RATING SYSTEM POINTS
          </a>
          :
        </label>
        <input
          type="text"
          name="grihaRatingPoints"
          value={formData.grihaRatingPoints}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label className="block mt-4">
          Percentage of newly constructed or renovated building space certified
          under a green building rating system for design and construction:
        </label>
        <input
          type="text"
          name="percentageCertifiedSpace"
          value={formData.percentageCertifiedSpace}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
      </form>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Last Button Submit
        </button>
        <button
          onClick={() => navigate("/form/student")}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Griha;
