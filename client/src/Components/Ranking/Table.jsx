import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Table = () => {
  const navigate = useNavigate();
  const [collegesArr, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("/api/colleges")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  function getScore(arr) {}

  const RowData = collegesArr;

  // const RowData = [
  //   {
  //     id: "JIIT62",
  //     name: "Jaypee institute of information technology Sector-62",
  //     state: "UP",
  //     city: "Noida",
  //     score: "98",
  //     rank: "1",
  //   },
  //   {
  //     id:"JSS",
  //     name:"Jagadguru Sri Shivarathreeshwara Academy of Technical Education",
  //     state:"UP",
  //     city:"Noida",
  //     score:"78",
  //     rank:"2"
  //     },
  //   {
  //     id: "JIIT128",
  //     name: "Jaypee institute of information technology Sector-128",
  //     state: "UP",
  //     city: "Noida",
  //     score: "75",
  //     rank: "3",
  //   },
  //   {
  //     id:"GLBAJAJ",
  //     name:"GL Bajaj Institute of Technology and Management",
  //     state:"UP",
  //     city:"Greater Noida",
  //     score:"70",
  //     rank:"4"
  //     },
  //     {
  //       id:"GLD",
  //       name:"Galgotias College of Engineering & Technology",
  //       state:"UP",
  //       city:"Greater Noida",
  //       score:"54",
  //       rank:"5"
  //       }

  // ];

  const handleClick = (id) => {
    navigate(`/dashboard/${id}`);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 w-[80%] ml-24">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-800 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Institiue-Id
              </th>
              <th scope="col" className="px-6 py-3">
                College name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  State
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  City
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Score
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Rank
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {RowData.map((clg, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 cursor-pointer dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  onClick={() => handleClick(clg.id)}
                  key={index}
                >
                  <td className="px-6 py-4">{clg.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {clg.name}
                  </th>
                  <td className="px-6 py-4">{clg.state}</td>
                  <td className="px-6 py-4">{clg.city}</td>
                  <th className="px-6 py-4">
                  {clg.TotalScore}
                  </th>

                  <th className="px-6 py-4">{index + 1}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
