import React, { useState, useEffect } from "react";
import "./Homepage.css";
import hill1 from "./assets/hill1.png";
import hill2 from "./assets/hill2.png";
import hill3 from "./assets/hill3.png";
import hill4 from "./assets/hill4.png";
import hill5 from "./assets/hill5.png";
import tree from "./assets/tree.png";
import leaf from "./assets/leaf.png";
import plant from "./assets/plant.png";
import OIP from "./assets/OIP.jpeg";
import downloadImage1 from "./assets/download.jpeg";
import downloadImage2 from "./assets/download (1).jpeg";
import Logo from "../../assets/logo.png";

export const HomePage = () => {
  let [text, setText] = useState(null);
  let [leafElement, setLeafElement] = useState(null);
  let [hill1Element, setHill1Element] = useState(null);
  let [hill4Element, setHill4Element] = useState(null);
  let [hill5Element, setHill5Element] = useState(null);

  let [parameter1, setParameter1] = useState(null);
  let [parameter2, setParameter2] = useState(null);
  let [parameter3, setParameter3] = useState(null);

  useEffect(() => {
    text = document.getElementById("text");
    leafElement = document.getElementById("leaf");
    hill1Element = document.getElementById("hill1");
    hill4Element = document.getElementById("hill4");
    hill5Element = document.getElementById("hill5");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      text.style.marginTop = value * 2.5 + "px";
      leafElement.style.top = value * -1.5 + "px";
      leafElement.style.left = value * 1.5 + "px";
      hill5Element.style.left = value * 1.5 + "px";
      hill4Element.style.left = value * -1.5 + "px";
      hill1Element.style.top = value * 1 + "px";
    });

    parameter1 = document.getElementById("parameter1");
    parameter2 = document.getElementById("parameter2");
    parameter3 = document.getElementById("parameter3");
  }, []);

  return (
    <>
      <body>
        {/* <header>
          <img src={Logo} alt="Logo" />
          <nav className="navigation">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Surveys</a>
            <a href="#">Register</a>
          </nav>
        </header> */}
        <section className="parallax">
          {/* Update the src attributes with the imported images */}
          <img src={hill1} id="hill1" alt="Hill 1" />
          <img src={hill2} id="hill2" alt="Hill 2" />
          <img src={hill3} id="hill3" alt="Hill 3" />
          <img src={hill4} id="hill4" alt="Hill 4" />
          <img src={hill5} id="hill5" alt="Hill 5" />
          <img src={tree} id="tree" alt="Tree" />
          <h2 id="text">
            NISHE
            <p id="fullFormText">
              (National Initiative for Sustainability in Higher Education)
            </p>
          </h2>
          <img src={leaf} id="leaf" alt="Leaf" />
          <img src={plant} id="plant" alt="Plant" />
        </section>

        <section className="sec">
          <div className="heading">
            <h2 className="font-bold text-2xl">About us</h2>
          </div>
          <p>
            Welcome to NISHE - National Initiative for Sustainability in Higher
            Education
          </p>
          <div className="mission">
            <img src={OIP} />
            <div className="tect1">
              <h4>Our Mission</h4>
              <div className="text">
                <p>
                  At NISHE, we are on a mission to catalyze a sustainable
                  transformation in higher education institutions across the
                  nation. We firmly believe that education is the cornerstone of
                  positive change, and by fostering sustainability within the
                  academic sphere, we can inspire future generations to tackle
                  the pressing environmental, social, and governance challenges
                  of our time.
                </p>
              </div>
            </div>
          </div>
          <div className="vission">
            <div className="text">
              <p>
                We invite higher education institutions, students, faculty,
                administrators, and all stakeholders to join us in this
                transformative journey towards a sustainable future. Together,
                we can make a lasting impact, inspire positive change, and
                create a legacy of sustainability in higher education that
                resonates for generations to come.
              </p>
            </div>
            <img src={downloadImage1} />
          </div>
          <div className="mission">
            <img src={downloadImage2} />
            <div className="tect1">
              <h4>What we do?</h4>
              <div className="text">
                <p>
                  At NISHE, we are on a mission to catalyze a sustainable
                  transformation in higher education institutions across the
                  nation. We firmly believe that education is the cornerstone of
                  positive change, and by fostering sustainability within the
                  academic sphere, we can inspire future generations to tackle
                  the pressing environmental, social, and governance challenges
                  of our time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="yheading">
          <h3>Judging Criteria</h3>
        </div>
        <div className="body1">
          <div className="container">
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className="texts">
                  <h3>Waste diversion rate </h3>
                  <p>
                    This metric assesses the effectiveness of a college's waste
                    management practices
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-dumpster-fire"></i>
                </div>
                <div className="texts">
                  <h3>Greenhouse Gas Emissions Plan </h3>
                  <p>
                    This parameter evaluates whether the college has a formal
                    plan in place to reduce its greenhouse gas emissions.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-recycle"></i>
                </div>
                <div className="texts">
                  <h3>Renewable Energy Consumption </h3>
                  <p>
                    This metric reveals the proportion of the institution's
                    energy consumption that comes from renewable sources such as
                    solar, wind, or hydropower
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-bicycle"></i>
                </div>
                <div className="texts">
                  <h3>Landscape Management</h3>
                  <p>
                    Evaluating how the campus manages its landscaping highlights
                    efforts to preserve green spaces
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-snowflake fa-spin"></i>
                </div>
                <div className="texts">
                  <h3>Water Usage and Management</h3>
                  <p>
                    {" "}
                    Evaluating water usage data and proper methods to control
                    excess water consumption helps gauge the institution's
                    efforts in responsible water management, an essential aspect
                    of sustainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ backgroundColor: "#89ec5b" }}>
              <div className="content">
                <div className="icon">
                  <i className="fa-solid fa-plant-wilt fa-beat-fade"></i>
                </div>
                <div className="texts">
                  <h3>Sustainable Research Investment </h3>
                  <p>
                    This parameter looks at the financial commitment and
                    achievements related to sustainable research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div id="map"></div>

        <div className="psudocont">
          <footer>
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <ul className="social_icon">
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-n"></i>
                </a>
              </li>
            </ul>
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Surveys</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
            <p>All rights reserved.</p>
          </footer>
        </div>
      </body>
    </>
  );
};
