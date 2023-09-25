export const Events = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-4 underline underline-offset-4 ">
        Events
      </h1>

      {/* <ol className="items-center sm:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Waste Management - Waste Diversion Rate
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Implement recycling programs for paper, plastic, glass, and other
              recyclables. Purchase renewable energy from local providers.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Renewable Energy Drive
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Install solar panels or wind turbines on campus. Purchase
              renewable energy from local providers.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Investment in Sustainable Research
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Allocate funds for sustainability research projects. Collaborate
              with research institutions and experts.
            </p>
          </div>
        </li>
      </ol> */}

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Waste Management - Waste Diversion Rate</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Implement recycling programs for paper, plastic, glass, and other recyclables.
            Encourage composting of organic waste.
            Reduce single-use items like disposable cups and cutlery.
            Educate students and staff about proper waste sorting and disposal.
        </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Greenhouse Gas Mitigation Plan</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Develop a comprehensive greenhouse gas reduction plan.
            Identify emission sources and set reduction targets.
            Invest in renewable energy sources like solar panels.
            Promote energy-efficient practices in buildings and transportation.
        </p>
        </li>
        <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Renewable Energy Usage</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Install solar panels or wind turbines on campus.
            Purchase renewable energy from local providers.
            Upgrade lighting and HVAC systems for energy efficiency.
            Encourage energy conservation among students and staff.
        </p>
    </li>
      </ol>
    </>
  );
};
