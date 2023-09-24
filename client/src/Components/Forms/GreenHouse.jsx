import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParameterContext } from "./Context/Parameters";

function GreenHouse() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    grossScope1StationaryCombustionYear1: 0,
    grossScope1OtherSourcesYear1: 0,
    grossScope2ImportedElectricityYear1: 0,
    grossScope2ImportedThermalEnergyYear1: 0,
    grossScope1StationaryCombustionYear2: 0,
    grossScope1OtherSourcesYear2: 0,
    grossScope2ImportedElectricityYear2: 0,
    grossScope2ImportedThermalEnergyYear2: 0,
    hasMitigationPlan: "",
    hasCompletedInventory: "",
    initiativesDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    // Calculate the total for 2022
    const total2022 =
      formData.grossScope1StationaryCombustionYear1 +
      formData.grossScope1OtherSourcesYear1 +
      formData.grossScope2ImportedElectricityYear1 +
      formData.grossScope2ImportedThermalEnergyYear1;

    // Calculate the total for 2023
    const total2023 =
      formData.grossScope1StationaryCombustionYear2 +
      formData.grossScope1OtherSourcesYear2 +
      formData.grossScope2ImportedElectricityYear2 +
      formData.grossScope2ImportedThermalEnergyYear2;

    // Create the parameter object for 2022 and 2023
    const parameter2022 = {
      name: "2022 Greenhouse Gas Emissions",
      year: 2022,
      Score: total2022,
    };

    const parameter2023 = {
      name: "2023 Greenhouse Gas Emissions",
      year: 2023,
      Score: total2023,
    };

    // Store the parameters in the context
    addParameter([parameter2022, parameter2023]);

    // Navigate to the next page
    navigate("/form/renewable");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold mt-4 mb-4">
        Gross Scope 1 and Scope 2 greenhouse gas (GHG) emissions Form
      </h2>
      <form>
        <h3 className="font-semibold">Enter the following data for 2022 :</h3>
        <label>Gross Scope 1 GHG emissions from stationary combustion: </label>
        <input
          type="number"
          name="grossScope1StationaryCombustionYear1"
          value={formData.grossScope1StationaryCombustionYear1}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Gross Scope 1 GHG emissions from other sources: </label>
        <input
          type="number"
          name="grossScope1OtherSourcesYear1"
          value={formData.grossScope1OtherSourcesYear1}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Gross Scope 2 GHG emissions from imported electricity: </label>
        <input
          type="number"
          name="grossScope2ImportedElectricityYear1"
          value={formData.grossScope2ImportedElectricityYear1}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>
          Gross Scope 2 GHG emissions from imported thermal energy:{" "}
        </label>
        <input
          type="number"
          name="grossScope2ImportedThermalEnergyYear1"
          value={formData.grossScope2ImportedThermalEnergyYear1}
          onChange={handleChange}
        />
        <br />
        <br />

        <h3 className="font-semibold">Enter the following data for 2023 :</h3>
        <label>Gross Scope 1 GHG emissions from stationary combustion: </label>
        <input
          type="number"
          name="grossScope1StationaryCombustionYear2"
          value={formData.grossScope1StationaryCombustionYear2}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Gross Scope 1 GHG emissions from other sources: </label>
        <input
          type="number"
          name="grossScope1OtherSourcesYear2"
          value={formData.grossScope1OtherSourcesYear2}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Gross Scope 2 GHG emissions from imported electricity: </label>
        <input
          type="number"
          name="grossScope2ImportedElectricityYear2"
          value={formData.grossScope2ImportedElectricityYear2}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>
          Gross Scope 2 GHG emissions from imported thermal energy:{" "}
        </label>
        <input
          type="number"
          name="grossScope2ImportedThermalEnergyYear2"
          value={formData.grossScope2ImportedThermalEnergyYear2}
          onChange={handleChange}
        />
        <br />
        <br />

        <p>Do you have a formal plan to mitigate greenhouse emissions?</p>
        <input
          type="text"
          name="hasMitigationPlan"
          value={formData.hasMitigationPlan}
          onChange={handleChange}
          placeholder="yes/no"
        />
        <br />
        <br />

        <p>
          Has your institution completed an inventory within the previous three
          years to quantify its air pollutant emissions?:
        </p>
        <input
          type="text"
          name="hasCompletedInventory"
          value={formData.hasCompletedInventory}
          onChange={handleChange}
          placeholder="yes/no"
        />
        <br />
        <br />

        <p>
          A brief description of your institution’s GHG emissions reduction
          initiatives:
        </p>
        <textarea
          name="initiativesDescription"
          value={formData.initiativesDescription}
          onChange={handleChange}
          placeholder="enter here"
        />
        <br />
        <br />
        <div className="flex justify-between mt-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
        <button
          onClick={() => navigate('/form/waste')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
      </form>
    </div>
  );
}

export default GreenHouse;
