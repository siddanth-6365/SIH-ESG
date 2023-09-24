import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function Renewable() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    importedElectricity: '',
    renewableEnergy: '',
    totalEnergyConsumption: '',
    floorArea: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // Sum up the data from the form and create a parameter object
    const renewableData = {
      name: 'Renewable Data',
      // Add other properties here based on your parameter schema
      // Example:
      // year: 2022,
      // Score: 0, // Set an initial score
      // ...
      Quantity: {
        importedElectricity: formData.importedElectricity,
        renewableEnergy: formData.renewableEnergy,
      },
      // Add other properties based on your parameter schema
      // Example:
      // Weight: {
      //   weight: 0,
      //   units: 'kg',
      // },
    };

    // Add the parameter to the context
    addParameter(renewableData);

    // Navigate to the next page
    navigate('/form/sustainable');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 mt-8">Electricity use, performance year (report kilowatt-hours):</h2>
      <form>
        <h3 className="text-lg font-semibold mb-2">Enter the following data</h3>
        <label htmlFor="imported" className="block mb-2">
          Imported electricity (in kWh):
        </label>
        <input
          type="text"
          id="imported"
          name="importedElectricity"
          value={formData.importedElectricity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label htmlFor="renewable" className="block mb-2">
          Electricity from on-site, non-combustion facilities/devices (e.g., renewable energy systems, imported steam, hot water, and/or chilled water):
        </label>
        <input
          type="text"
          id="renewable"
          name="renewableEnergy"
          value={formData.renewableEnergy}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">Total site energy consumption, performance year:</p>
        <input
          type="text"
          name="totalEnergyConsumption"
          value={formData.totalEnergyConsumption}
          onChange={handleChange}
          placeholder="in MMBtu"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">Gross floor area of building space, performance year:</p>
        <input
          type="text"
          name="floorArea"
          value={formData.floorArea}
          onChange={handleChange}
          placeholder="in Square Feet"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <p className="text-lg font-semibold mb-2">A brief description of passive solar heating, geothermal systems, and related strategies employed by your institution:</p>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
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
          onClick={() => navigate('/form/greenhouse')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Renewable;
