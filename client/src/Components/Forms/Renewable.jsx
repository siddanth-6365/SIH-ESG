import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParameterContext } from "./Context/Parameters";

function Renewable() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  // Separate state for 2022 and 2023 data
  const [formData2022, setFormData2022] = useState({
    importedElectricity: "",
    renewableEnergy: "",
    totalEnergyConsumption: "",
    floorArea: "",
    description: "",
  });

  const [formData2023, setFormData2023] = useState({
    importedElectricity: "",
    renewableEnergy: "",
    totalEnergyConsumption: "",
    floorArea: "",
    description: "",
  });

  const handleChange2022 = (e) => {
    setFormData2022({
      ...formData2022,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2023 = (e) => {
    setFormData2023({
      ...formData2023,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
  
    let totalEnergy2022 =
      Number(formData2022.importedElectricity) +
      Number(formData2022.renewableEnergy) +
      Number(formData2022.totalEnergyConsumption);
    let score2022 = totalEnergy2022 / Number(formData2022.floorArea);

    let totalEnergy2023 =
      Number(formData2023.importedElectricity) +
      Number(formData2023.renewableEnergy) +
      Number(formData2023.totalEnergyConsumption);

    let score2023 = totalEnergy2023 / Number(formData2023.floorArea);
    let score;
    if (score2022 > score2023) {
      score = (score2022 - score2023) * 10;
    } else {
      score = 0;
    }

    const renewableData = {
      name: "Renewable",
      Score: score,
    };
    console.log("rene :", renewableData);

    addParameter(renewableData);

    // Navigate to the next page
    navigate("/form/sustainable");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 mt-8">
        Electricity use, performance year (report kilowatt-hours):
      </h2>
      <h2 className="font-semibold text-2xl">2022:</h2>
      <form>
        <h3 className="text-lg font-semibold mb-2">Enter the following data</h3>
        <label htmlFor="imported" className="block mb-2">
          Imported electricity (in kWh):
        </label>
        <input
          type="text"
          id="imported"
          name="importedElectricity"
          value={formData2022.importedElectricity}
          onChange={handleChange2022}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="renewable" className="block mb-2">
          Electricity from on-site, non-combustion facilities/devices (e.g.,
          renewable energy systems, imported steam, hot water, and/or chilled
          water):
        </label>
        <input
          type="text"
          id="renewable"
          name="renewableEnergy"
          value={formData2022.renewableEnergy}
          onChange={handleChange2022}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          Total site energy consumption, performance year:
        </p>
        <input
          type="text"
          name="totalEnergyConsumption"
          value={formData2022.totalEnergyConsumption}
          onChange={handleChange2022}
          placeholder="in MMBtu"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          Gross floor area of building space, performance year:
        </p>
        <input
          type="text"
          name="floorArea"
          value={formData2022.floorArea}
          onChange={handleChange2022}
          placeholder="in Square Feet"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          A brief description of passive solar heating, geothermal systems, and
          related strategies employed by your institution:
        </p>
        <textarea
          name="description"
          value={formData2022.description}
          onChange={handleChange2022}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
      </form>

      <h2 className="font-semibold text-2xl">2023:</h2>

      <form>
        <h3 className="text-lg font-semibold mb-2">Enter the following data</h3>
        <label htmlFor="imported" className="block mb-2">
          Imported electricity (in kWh):
        </label>
        <input
          type="text"
          id="imported"
          name="importedElectricity"
          value={formData2023.importedElectricity}
          onChange={handleChange2023}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="renewable" className="block mb-2">
          Electricity from on-site, non-combustion facilities/devices (e.g.,
          renewable energy systems, imported steam, hot water, and/or chilled
          water):
        </label>
        <input
          type="text"
          id="renewable"
          name="renewableEnergy"
          value={formData2023.renewableEnergy}
          onChange={handleChange2023}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          Total site energy consumption, performance year:
        </p>
        <input
          type="text"
          name="totalEnergyConsumption"
          value={formData2023.totalEnergyConsumption}
          onChange={handleChange2023}
          placeholder="in MMBtu"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          Gross floor area of building space, performance year:
        </p>
        <input
          type="text"
          name="floorArea"
          value={formData2023.floorArea}
          onChange={handleChange2023}
          placeholder="in Square Feet"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">
          A brief description of passive solar heating, geothermal systems, and
          related strategies employed by your institution:
        </p>
        <textarea
          name="description"
          value={formData2023.description}
          onChange={handleChange2023}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
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
          onClick={() => navigate("/form/greenhouse")}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Renewable;
