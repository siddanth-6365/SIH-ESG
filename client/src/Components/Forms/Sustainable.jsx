import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParameterContext } from "./Context/Parameters";

function Sustainable() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    studentResearchProgram: "",
    staffResearchProgram: "",
    studentResearchDescription: "",
    sustainableIndustries: "",
    exemplaryPerformance: "",
    investmentFunds: "",
    totalBudget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function getScore(str) {
    if (str) {
      return 5;
    } else {
      return 0;
    }
  }

  const handleClick = () => {
    // Quantity: {
    //   studentResearchProgram: formData.studentResearchProgram,
    //   staffResearchProgram: formData.staffResearchProgram,
    //   sustainableIndustries: formData.sustainableIndustries,
    //   exemplaryPerformance: formData.exemplaryPerformance,
    //   investmentFunds: formData.investmentFunds,
    //   totalBudget: formData.totalBudget,
    // },

    let score =
      getScore(formData.studentResearchProgram) +
      getScore(formData.staffResearchProgram);

    const sustainableData = {
      name: "Sustainable",
      Score: score,
    };
    console.log("sustainableData :", sustainableData);

    addParameter(sustainableData);

    navigate("/form/water");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mt-8">
        Invest in sustainable research - Amount and achievements
      </h2>
      <form>
        <label htmlFor="studentResearchProgram" className="block mb-2">
          Does the institution have an ongoing program to encourage students in
          multiple disciplines or academic programs to conduct sustainability
          research?:
        </label>
        <input
          type="text"
          id="studentResearchProgram"
          name="studentResearchProgram"
          value={formData.studentResearchProgram}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="staffResearchProgram" className="block mb-2">
          Does the institution have a program to encourage academic staff from
          multiple disciplines or academic programs to conduct sustainability
          research?:
        </label>
        <input
          type="text"
          id="staffResearchProgram"
          name="staffResearchProgram"
          value={formData.staffResearchProgram}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          A brief description of the student sustainability research program:
        </p>
        <textarea
          name="studentResearchDescription"
          value={formData.studentResearchDescription}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <h3 className="text-lg font-semibold mb-2">
          Value of holdings in each of the following categories
        </h3>
        <label htmlFor="sustainableIndustries" className="block mb-2">
          Sustainable industries (e.g., renewable energy or sustainable
          forestry):
        </label>
        <input
          type="text"
          id="sustainableIndustries"
          name="sustainableIndustries"
          value={formData.sustainableIndustries}
          onChange={handleChange}
          placeholder=""
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="exemplaryPerformance" className="block mb-2">
          Businesses selected for exemplary sustainability performance (e.g.,
          using criteria specified in a sustainable investment policy)
        </label>
        <input
          type="text"
          id="exemplaryPerformance"
          name="exemplaryPerformance"
          value={formData.exemplaryPerformance}
          onChange={handleChange}
          placeholder=""
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="investmentFunds" className="block mb-2">
          Sustainability investment funds (e.g., a renewable energy or impact
          investment fund):
        </label>
        <input
          type="text"
          id="investmentFunds"
          name="investmentFunds"
          value={formData.investmentFunds}
          onChange={handleChange}
          placeholder=""
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="totalBudget" className="block mb-2">
          Total Budget:
        </label>
        <input
          type="text"
          id="totalBudget"
          name="totalBudget"
          value={formData.totalBudget}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
      </form>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
        <button
          onClick={() => navigate("/form/renewable")}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Sustainable;
