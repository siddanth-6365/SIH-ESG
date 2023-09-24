import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParameterContext } from './Context/Parameters';

function Student() {
  const navigate = useNavigate();
  const { addParameter } = useParameterContext();

  const [formData, setFormData] = useState({
    studentsEnrolledForCredit: '',
    studentsServedByOutreachProgram: '',
    percentageStudentsServed: '',
    studentEducatorsProgramDescription: '',
    hasActiveStudentGroup: 'No',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleActiveStudentGroupChange = (e) => {
    setFormData({
      ...formData,
      hasActiveStudentGroup: e.target.value,
    });
  };

  const handleClick = () => {
    // Sum up the data from the form and create a parameter object
    const studentData = {
      name: 'Student Data',
      // Add other properties here based on your parameter schema
      // Example:
      // year: 2022,
      // Score: 0, // Set an initial score
      // ...
      // For Quantity, you can add your data as needed
      Quantity: {
        studentsEnrolledForCredit: formData.studentsEnrolledForCredit,
        studentsServedByOutreachProgram: formData.studentsServedByOutreachProgram,
        percentageStudentsServed: formData.percentageStudentsServed,
      },
      // Add other properties based on your parameter schema
      // Example:
      // Weight: {
      //   weight: 0,
      //   units: 'kg',
      // },
      StudentGroup: {
        hasActiveStudentGroup: formData.hasActiveStudentGroup,
        studentEducatorsProgramDescription: formData.studentEducatorsProgramDescription,
      },
    };

    // Add the parameter to the context
    addParameter(studentData);

    // Navigate to the next page
    navigate('/form/griha');
  };

  

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-2xl font-bold mt-4">Does the institution have an active student group focused on sustainability? - Events conducted and frequency of such events</h2>
      <label className="block mt-4">Number of students enrolled for credit:</label>
      <input
        type="text"
        name="studentsEnrolledForCredit"
        value={formData.studentsEnrolledForCredit}
        onChange={handleChange}
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <label className="block mt-4">Total number of students served by a peer-to-peer sustainability outreach and education program:</label>
      <input
        type="text"
        name="studentsServedByOutreachProgram"
        value={formData.studentsServedByOutreachProgram}
        onChange={handleChange}
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <p className="mt-4">Percentage of students served by a peer-to-peer sustainability outreach and education program:</p>
      <input
        type="text"
        name="percentageStudentsServed"
        value={formData.percentageStudentsServed}
        onChange={handleChange}
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <p className="mt-4">A brief description of the student educators program (1st program):</p>
      <textarea
        name="studentEducatorsProgramDescription"
        value={formData.studentEducatorsProgramDescription}
        onChange={handleChange}
        className="w-[20%] border border-gray-300 rounded-md py-2 px-3 mb-2"
      />

      <p className="mt-4">Does the institution have an active student group focused on sustainability?</p>
      <div className="flex mb-2">
        <label className="mr-2">
          <input
            type="radio"
            name="hasActiveStudentGroup"
            value="Yes"
            checked={formData.hasActiveStudentGroup === 'Yes'}
            onChange={handleActiveStudentGroupChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasActiveStudentGroup"
            value="No"
            checked={formData.hasActiveStudentGroup === 'No'}
            onChange={handleActiveStudentGroupChange}
          />
          No
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
        <button
          onClick={() => navigate('/form/water')}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Student;
