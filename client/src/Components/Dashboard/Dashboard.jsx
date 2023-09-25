import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Barchart } from "./Barchart";
import { Piechart } from "./Piechart";
import { Carousel } from "./Carousel";
import { Testmonials } from "./Testmonials";
import { TipsPage } from "./TipsPage";
import { Events } from "./Events";
// import { Navbar } from "../Navbar/Navbar";
import axios from "axios";

export const Dashboard = () => {
  let { id } = useParams();

  const [collegesArr, setColleges] = useState([]);
  const [Barchartlabels, setBarchartLabels] = useState([]);
  const [Barchartdata, setBarchartData] = useState([]);
  const [PieChartLabels, setPieChartLabels] = useState([]);
  const [PieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/colleges/${id}`)
      .then((response) => {
        setColleges(response.data);

        const parameterArray = response.data.parameter;
        const labels1 = parameterArray.map((parameter) => parameter.name);
        const data1 = parameterArray.map((parameter) => parameter.Score);

        setBarchartLabels(labels1);
        setBarchartData(data1);

        const topTwoParameters = parameterArray.slice(0, 3);

        const labels2 = topTwoParameters.map((parameter) => parameter.name);
        const data2 = topTwoParameters.map((parameter) => parameter.Score);

        setPieChartLabels(labels2);
        setPieChartData(data2);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
      });
  }, [id]);
  const barGraphColors = [
    "#70efde",
    "#005457",
    "#30009c",
    "#2ECC40",
    "#018786",
    "#5600e8",
    "#01a299",
    "#7f39fb",
    "#00c4b4",
    "#bb86fc",
    
    
  ];

  const BarchartdataObj = {
    labels: Barchartlabels,
    datasets: [
      {
        label: "1",
        data: Barchartdata,
        backgroundColor:barGraphColors,
        borderColor: "black",
        borderWidth: 1.2,
      },
    ],
  };

  const CarouselImageSrc = [
    "https://www.jiit.ac.in/jiit/amn/img/10.jpg",
    "https://www.jiit.ac.in/sites/default/files/home-banner-1.jpg",
    "https://images.shiksha.com/mediadata/images/1587371272phpazaLze.jpeg",
    "https://qph.cf2.quoracdn.net/main-qimg-5e0770984e5346f22327ee029298137b-lq",
  ];

  const PieChartdataObj = {
    labels: PieChartLabels,
    datasets: [
      {
        label: "Poll",
        data: PieChartData,
        backgroundColor: ["#03dcc6", "#dbb2ff", "#985eff"],
        borderColor: "black",
        borderWidth: 1.2,
      },
    ],
  };

  const TestmonialsObj = {};
  //   const counters = document.querySelectorAll('.value');
  // const speed = 200;

  // counters.forEach( counter => {
  //    const animate = () => {
  //       const value = +counter.getAttribute('akhi');
  //       const data = +counter.innerText;

  //       const time = value / speed;
  //      if(data < value) {
  //           counter.innerText = Math.ceil(data + time);
  //           setTimeout(animate, 1);
  //         }else{
  //           counter.innerText = value;
  //         }

  //    }

  //    animate();
  // });

  return (
    <>
      <div className="p-2">
        <div className="p-4 m-4 font-semibold underline underline-offset-4 text-2xl text-center">
          <h2>Display data for institution with ID: {id}</h2>
        </div>

        <div className="w-full flex">
          <div id="left-leftDiv" className="w-[12%] ">
            <aside
              id="default-sidebar"
              className="fixed top-0  left-0 z-40 w-32 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="h-full px-3 py-4  overflow-y-auto bg-gray-200 dark:bg-gray-800">
                <ul className="space-y-2  font-medium">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ml-2">Dashboard</span>
                    </a>
                  
                </li>
            
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>

                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Home
                      </span>
                    </a>
                
                  </li>
                  <li>
                    <a
                      href="#EventsPage"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>

                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Events
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#TipPage"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>

                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        Tips
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Review"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>

                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        reviews
                      </span>
                    </a>
                  </li>
                
                </ul>
              </div>
            </aside>
          </div>

          <div id="leftDiv" className="w-[58%] flex flex-col ">
            <div className="h-[450px] w-[750px]   ">
              <Barchart dataObj={BarchartdataObj} />
            </div>

            <div className="mt-16 ">
              <div className=" flex flex-wrap w-[800px] border rounded-lg md:mb-12 md:grid-cols-2">
                {/* carousel */}
                <Carousel items={CarouselImageSrc} />
              </div>
            </div>
          </div>

          <div id="rightDiv" className=" flex flex-col ml-8 ">
            <div className="h-[400px] w-[450px]  ">
              <Piechart
                dataObj={PieChartdataObj}
                TotalScore={collegesArr.TotalScore}
              />
            </div>

            <div className="flex flex-col mt-32 ">
              <div className=" h-[150px] w-[350px] ">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5> */}
                  <div className="text-2xl font-semibold">1500 +</div>
                  Student surveyed
                </a>
              </div>
              <div className=" h-[100px] w-[350px]">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Green college since 2010
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    this was Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        

        <div id="EventsPage" className="mt-16 ml-[12%]"  >
          <Events />
        </div>

        {/* tips page */}
        <div id="TipPage" className="mt-[10%]">
          <TipsPage />
        </div>

        {/*      Testmonials page */}
        <div id="Review" className=" ml-36 p-2">
          <Testmonials />
        </div>
      </div>
    </>
  );
};
