import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function Griha() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    grihaRatingPoints: '',
    percentageCertifiedSpace: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    // Sum up the data from the form and create a parameter object
    const grihaData = {
      name: 'GRIHA Data',
      // Add other properties here based on your parameter schema
      // Example:
      // year: 2022,
      // Score: 0, // Set an initial score
      // ...
      // For Quantity, you can add your data as needed
      Quantity: {
        grihaRatingPoints: formData.grihaRatingPoints,
        percentageCertifiedSpace: formData.percentageCertifiedSpace,
      },
      // Add other properties based on your parameter schema
      // Example:
      // Weight: {
      //   weight: 0,
      //   units: 'kg',
      // },
    };

    // Add the parameter to the context
    addParameter(grihaData);

    // Navigate back to the FormStudent page
    navigate('/form/student');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mt-8">Building Design and Construction - Compliance with green norms</h2>
      <form>
        <label className="block mt-4">
          <a href="https://www.grihaindia.org/griha-rating">GRIHA RATING SYSTEM POINTS</a>:
        </label>
        <input
          type="text"
          name="grihaRatingPoints"
          value={formData.grihaRatingPoints}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />

        <label className="block mt-4">
          Percentage of newly constructed or renovated building space certified under a green building rating system for design and construction:
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
          onClick={() => navigate('/form/student')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Griha;
