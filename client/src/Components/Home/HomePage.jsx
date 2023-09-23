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
    <div id="HomepageDiv">
      <header>
        <h2 className= "logo">Logo</h2>
        <nav className= "navigation">
            <a href ="#">Home</a>
            <a href ="/ranking">Rankings</a>
            <a href = "/parameter">Parameters</a>
            <a href = "/newsletter">Newsletter</a>
            <a href = "#">Become a member</a>
        </nav>
    </header>
      <section className="parallax">
        <img src={hill1} alt="Hill 1" id="hill1" />
        <img src={hill2} alt="Hill 2" id="hill2" />
        <img src={hill3} alt="Hill 3" id="hill3" />
        <img src={hill4} alt="Hill 4" id="hill4" />
        <img src={hill5} alt="Hill 5" id="hill5" />
        <img src={tree} alt="Tree" id="tree" />
        <h2 id="text">NISHE</h2>
        <img src={leaf} alt="Leaf" id="leaf" />
        <img src={plant} alt="Plant" id="plant" />
      </section>

      <section className="sec">
        <div className="heading">
          <h2>About us</h2>
        </div>
        <p>Welcome to NISHE - National Initiative for Sustainability in Higher Education</p>
        <div className="mission">
          <img src={OIP} alt="OIP" />
          <div className="tect1">
            <h4>Our Mission</h4>
            <div className="text">
              <p>
                At NISHE, we are on a mission to catalyze a sustainable transformation in higher education institutions across the nation. We firmly believe that education is the cornerstone of positive change, and by fostering sustainability within the academic sphere, we can inspire future generations to tackle the pressing environmental, social, and governance challenges of our time.
              </p>
            </div>
          </div>
        </div>
        <div className="vission">
          <div className="text">
            <p>
              We invite higher education institutions, students, faculty, administrators, and all stakeholders to join us in this transformative journey towards a sustainable future. Together, we can make a lasting impact, inspire positive change, and create a legacy of sustainability in higher education that resonates for generations to come.
            </p>
          </div>
          <img src={downloadImage1} alt="Download 1" />
        </div>
        <div className="mission">
          <img src={downloadImage2} alt="Download 2" />
          <div className="tect1">
            <h4>What we do?</h4>
            <div className="text">
              <p>
                At NISHE, we are on a mission to catalyze a sustainable transformation in higher education institutions across the nation. We firmly believe that education is the cornerstone of positive change, and by fostering sustainability within the academic sphere, we can inspire future generations to tackle the pressing environmental, social, and governance challenges of our time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="parameter">
        <div className="container">
          <div className="box">
            <h1>01</h1>
            <h3>Waste diversion rate</h3>
            <p>This metric assesses the effectiveness of a college's waste management practices.</p>
          </div>
          <div className="box">
            <h1>02</h1>
            <h3>Invest in sustainable research</h3>
            <p>This parameter looks at the financial commitment and achievements related to sustainable research.</p>
          </div>
          <div className="box">
            <h1>03</h1>
            <h3>Renewable Energy Consumption:</h3>
            <p>This metric reveals the proportion of the institution's energy consumption that comes from renewable sources such as solar, wind, or hydropower.</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
