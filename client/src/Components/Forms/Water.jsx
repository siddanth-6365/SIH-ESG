import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function Water() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    totalWaterWithdrawalPerformance: '',
    totalWaterWithdrawalBaseline: '',
    potableWaterUsePerformance: '',
    potableWaterUseBaseline: '',
    sustainableWaterConsumption: 'No',
    waterSourcesDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSustainableWaterChange = (e) => {
    setFormData({
      ...formData,
      sustainableWaterConsumption: e.target.value,
    });
  };

  const handleClick = () => {
    // Sum up the data from the form and create a parameter object
    const waterData = {
      name: 'Water Data',
      // Add other properties here based on your parameter schema
      // Example:
      // year: 2022,
      // Score: 0, // Set an initial score
      // ...
      // For Quantity, you can add your data as needed
      Quantity: {
        totalWaterWithdrawalPerformance: formData.totalWaterWithdrawalPerformance,
        totalWaterWithdrawalBaseline: formData.totalWaterWithdrawalBaseline,
        potableWaterUsePerformance: formData.potableWaterUsePerformance,
        potableWaterUseBaseline: formData.potableWaterUseBaseline,
      },
      // Add other properties based on your parameter schema
      // Example:
      // Weight: {
      //   weight: 0,
      //   units: 'kg',
      // },
      Sustainable: {
        sustainableWaterConsumption: formData.sustainableWaterConsumption,
        waterSourcesDescription: formData.waterSourcesDescription,
      },
    };

    // Add the parameter to the context
    addParameter(waterData);

    // Navigate to the next page
    navigate('/form/student');
  };
 

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mt-8">Water use data and whether proper methods are employed to control excess</h2>
      <label className="block mt-4">Total water withdrawal (potable and non-potable combined):</label>
      <input
        type="text"
        name="totalWaterWithdrawalPerformance"
        value={formData.totalWaterWithdrawalPerformance}
        onChange={handleChange}
        placeholder="Performance Year"
        className="w-[30%] border mr-2 border-gray-300 rounded-md py-2 px-3 mb-2"
      />
      <input
        type="text"
        name="totalWaterWithdrawalBaseline"
        value={formData.totalWaterWithdrawalBaseline}
        onChange={handleChange}
        placeholder="Baseline Year"
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <label className="block mt-4">Potable water use per weighted campus user:</label>
      <input
        type="text"
        name="potableWaterUsePerformance"
        value={formData.potableWaterUsePerformance}
        onChange={handleChange}
        placeholder="Performance Year"
        className="w-[20%] border mr-2 border-gray-300 rounded-md py-2 px-3 mb-2"
      />
      <input
        type="text"
        name="potableWaterUseBaseline"
        value={formData.potableWaterUseBaseline}
        onChange={handleChange}
        placeholder="Baseline Year"
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <p className="mt-4">Has your institute utilized sustainable resources for water consumption?</p>
      <div className="flex mb-2">
        <label className="mr-2">
          <input
            type="radio"
            name="sustainableWaterConsumption"
            value="Yes"
            checked={formData.sustainableWaterConsumption === 'Yes'}
            onChange={handleSustainableWaterChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="sustainableWaterConsumption"
            value="No"
            checked={formData.sustainableWaterConsumption === 'No'}
            onChange={handleSustainableWaterChange}
          />
          No
        </label>
      </div>

      {formData.sustainableWaterConsumption === 'Yes' && (
        <>
          <p className="mt-4">If yes, describe the sources:</p>
          <textarea
            name="waterSourcesDescription"
            value={formData.waterSourcesDescription}
            onChange={handleChange}
            className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
          />
        </>
      )}
   <div className="flex justify-between mt-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
        <button
          onClick={() => navigate('/form/sustainable')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Water;
