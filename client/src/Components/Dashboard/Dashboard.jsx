import { useParams } from "react-router-dom";
import { Barchart } from "./Barchart";
import { Piechart } from "./Piechart";
export const Dashboard = () => {
  let { id } = useParams();

  return (
    <>
      <div className="">
        <h2>Display data for institution with ID: {id}</h2>
      </div>
      <div className="w-full flex">
        <div id="leftDiv" className="w-1/2 flex flex-col ">
          <div className="h-[300px] w-[600px] gap-8 ">
            <Barchart />
          </div>

          <div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Very easy this was to integrate
                  </h3>
                  <p className="my-4">
                    If you care for your time, I hands down would go with this.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Developer at Open AI
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Solid foundation for any project
                  </h3>
                  <p className="my-4">
                    Designing with Figma components that can be easily
                    translated to the utility classes of Tailwind CSS is a huge
                    timesaver!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>Roberta Casas</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Lead designer at Dropbox
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div id="rightDiv" className="w-1/2 flex flex-col ">
          <div className="h-[400px] w-[400px] ">
            <Piechart />
          </div>
          <div>sdfger</div>
        </div>
      </div>
    </>
  );
};
