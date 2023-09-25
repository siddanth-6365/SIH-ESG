export const TipsPage = () => {
  let tipsData = [
    {
      title: "Greenhouse Gas",
      tips: [
        "Develop a comprehensive greenhouse gas reduction plan.",
        "Identify emission sources and set reduction targets.",
        " Invest in renewable energy sources like solar panels.",
      ],
      score: "6",
    },
    {
      title: "Renewable Energy Usage",
      tips: [
        "Install solar panels or wind turbines on campus.",
        "Purchase renewable energy from local providers.",
        "Upgrade lighting and HVAC systems for energy efficiency.",
      ],
      score: "5",
    },
    {
      title: " Investment in Sustainable Research:",
      tips: [
        "Allocate funds for sustainability research projects.",
        "Collaborate with research institutions and experts.",
        "Showcase research achievements through conferences and publications.",
      ],
      score: "6",
    },
  ];
  return (
    <>
      <h1 className="text-center font-bold text-3xl mb-4 ml-32 underline underline-offset-4">Tips to improve</h1>
      <div className="flex gap-4 w-full ml-[15%] mb-12">
        {tipsData.map((item, index) => {
          return (
            <div
              className="w-1/3  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
               {item.title}
              </h5>

              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {item.tips[0]}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {item.tips[1]}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                   {item.tips[2]}
                  </span>
                </li>
              </ul>
            </div>
          );
        })}

        
      </div>
    </>
  );
};
