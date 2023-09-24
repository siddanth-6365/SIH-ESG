import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function CampusUsers() {
  const navigate = useNavigate();
  const { addCampusUsers } = useParameterContext();

  const [formData, setFormData] = useState({
    student1: 0,
    employee1: 0,
    other1: 0,
    fullStudent1: 0,
    fullemployee1: 0,
    student2: 0,
    employee2: 0,
    other2: 0,
    fullStudent2: 0,
    fullemployee2: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) || 0 });
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Calculate the total for 2022
    const total2022 =
      formData.student1 +
      formData.employee1 +
      formData.other1 +
      formData.fullStudent1 +
      formData.fullemployee1;

    // Calculate the total for 2023
    const total2023 =
      formData.student2 +
      formData.employee2 +
      formData.other2 +
      formData.fullStudent2 +
      formData.fullemployee2;

    // Create the parameter object for 2022 and 2023
    const parameter2022 = {
      name: '2022 Campus Users',
      year: 2022,
      Score: total2022,
    };

    const parameter2023 = {
      name: '2023 Campus Users',
      year: 2023,
      Score: total2023,
    };

    // Store the parameters in the context
    addCampusUsers([parameter2022, parameter2023]);

    // Navigate to the next page
    navigate('/form/waste');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 mt-4">Weighted Campus Users Form</h2>
      <form>
        <h3 className="text-lg font-semibold mb-4">
          Enter the following data for 2022
        </h3>
        <label className="block mb-2">Number of students resident on-site:</label>
        <input
          type="number"
          name="student1"
          value={formData.student1}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Number of employees resident on-site
        </label>
        <input
          type="number"
          name="employee1"
          value={formData.employee1}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Number of other individuals resident on-site
        </label>
        <input
          type="number"
          name="other1"
          value={formData.other1}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Total full-time equivalent student enrollment
        </label>
        <input
          type="number"
          name="fullStudent1"
          value={formData.fullStudent1}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Full-time equivalent of employees
        </label>
        <input
          type="number"
          name="fullemployee1"
          value={formData.fullemployee1}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-4"
        />
        <br />
        <br />

        <h3 className="text-lg font-semibold mb-4">
          Enter the following data for 2023
        </h3>
        <br />
        <label className="block mb-2">Number of students resident on-site:</label>
        <input
          type="number"
          name="student2"
          value={formData.student2}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Number of employees resident on-site
        </label>
        <input
          type="number"
          name="employee2"
          value={formData.employee2}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Number of other individuals resident on-site
        </label>
        <input
          type="number"
          name="other2"
          value={formData.other2}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">
          Total full-time equivalent student enrollment
        </label>
        <input
          type="number"
          name="fullStudent2"
          value={formData.fullStudent2}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <br />
        <br />

        <label className="block mb-2">Full-time equivalent of employees</label>
        <input
          type="number"
          name="fullemployee2"
          value={formData.fullemployee2}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-4"
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
          onClick={() => navigate('/form')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
      </form>
    </div>
  );
}

export default CampusUsers;
