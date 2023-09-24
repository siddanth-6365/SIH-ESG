import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParameterContext } from "./Context/Parameters";
function WasteManagement() {
  const navigate = useNavigate();
  const { addParameter, CampusUsers } = useParameterContext();

  const [formData, setFormData] = useState({
    materialRecycledYear1: 0,
    materialCompostedYear1: 0,
    donatedYear1: 0,
    landfillYear1: 0,
    residualYear1: 0,
    materialRecycledYear2: 0,
    materialCompostedYear2: 0,
    donatedYear2: 0,
    landfillYear2: 0,
    residualYear2: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) || 0 });
  };

  const handleClick = () => {
    // Calculate the total for 2022
    const total2022 =
      formData.materialRecycledYear1 +
      formData.materialCompostedYear1 +
      formData.donatedYear1 +
      formData.landfillYear1 +
      formData.residualYear1;

    const total2023 =
      formData.materialRecycledYear2 +
      formData.materialCompostedYear2 +
      formData.donatedYear2 +
      formData.landfillYear2 +
      formData.residualYear2;

    let score2022 = total2022 / CampusUsers;
    let score2023 = total2023 / CampusUsers;
    let score;
    if (score2022 > score2023) {
      score = (score2022 - score2023) * 10;
    } else {
      score = 0;
    }

    const parameterObj = {
      name: "Waste-Management",
      Score: score,
    };
    console.log("waste: ", parameterObj, " users :", CampusUsers);
    if (total2022 > 0 && total2023 > 0) {
      addParameter(parameterObj);
    }

    navigate("/form/greenhouse");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl mt-4 font-bold mb-4">
        Waste Management Information Form
      </h2>
      <form className="flex justify-around">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Enter the following data for 2022
          </h3>
          <label className="block mb-2">Material Recycled:</label>
          <input
            type="number"
            name="materialRecycledYear1"
            value={formData.materialRecycledYear1}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">Material Composted:</label>
          <input
            type="number"
            name="materialCompostedYear1"
            value={formData.materialCompostedYear1}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">Material Donated or re-sold:</label>
          <input
            type="number"
            name="donatedYear1"
            value={formData.donatedYear1}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">
            Materials disposed in a solid waste landfill or incinerator:
          </label>
          <input
            type="number"
            name="landfillYear1"
            value={formData.landfillYear1}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">
            Materials disposed through post-recycling residual conversion:
          </label>
          <input
            type="number"
            name="residualYear1"
            value={formData.residualYear1}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-4"
          />
          <br />
          <br />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Enter the following data for 2023
          </h3>
          <br />
          <label className="block mb-2">Material Recycled:</label>
          <input
            type="number"
            name="materialRecycledYear2"
            value={formData.materialRecycledYear2}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">Material Composted:</label>
          <input
            type="number"
            name="materialCompostedYear2"
            value={formData.materialCompostedYear2}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">Material Donated or re-sold:</label>
          <input
            type="number"
            name="donatedYear2"
            value={formData.donatedYear2}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">
            Materials disposed in a solid waste landfill or incinerator:
          </label>
          <input
            type="number"
            name="landfillYear2"
            value={formData.landfillYear2}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
          <br />
          <br />

          <label className="block mb-2">
            Materials disposed through post-recycling residual conversion:
          </label>
          <input
            type="number"
            name="residualYear2"
            value={formData.residualYear2}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-4"
          />
          <br />
          <br />
        </div>
      </form>
      <button
        onClick={handleClick}
        className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
      >
        Next
      </button>
      <button
        onClick={() => navigate("/form/campususer")}
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
      >
        Go Back
      </button>
    </div>
  );
}

export default WasteManagement;
