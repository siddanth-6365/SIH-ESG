import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function CollegeDetails() {
  const navigate = useNavigate();
  const { setCollegeInfofun } = useParameterContext();

  const [formData, setFormData] = useState({
    name: '',
    collegeAddress: '',
    collegeId: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    const collegedata={
      name: formData.name,
      collegeAddress: formData.collegeAddress,
      collegeId: formData.collegeId,
      city: formData.city,
      state: formData.state,
    }
    setCollegeInfofun(collegedata);
    navigate('/form/campususer');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 mt-6">College Information Form</h2>
      <form>
        <label className="block mb-2">College Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label className="block mb-2">College Address:</label>
        <input
          type="text"
          name="collegeAddress"
          value={formData.collegeAddress}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label className="block mb-2">College ID:</label>
        <input
          type="text"
          name="collegeId"
          value={formData.collegeId}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label className="block mb-2">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <label className="block mb-2">State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-4"
        />
        <br/>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default CollegeDetails;
