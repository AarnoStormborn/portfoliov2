import React, { useEffect, useState } from "react";
import Particle from "./Particle";
import "../styles/home.css";

function Intro() {

  const [banner, setBanner] = useState(1)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBanner(prevBanner => (prevBanner%5)+1)
    }, 1500);

    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      <Particle />
      <div className="row intro-section parallax-layer" id="home">
        <div className="col-sm-7 d-flex align-items-center justify-content-center top-div">
          <div className="py-5 my-5">
            <h1 id="title">
              <strong>Harsh Singh</strong>
            </h1>
            <h4 id="dynamicText">
              <u>
                <em>
                  <div className="roller">
                    <span id="rolltext">
                      <br />
                      Data Scientist
                      <br />
                      ML Engineer
                      <br />
                      Software Developer
                    </span>
                  </div>
                </em>
              </u>
            </h4>
            <div className="d-flex justify-content-evenly mt-5 icon-container">
              <div className="icon ms-5">
                <a className="navbar-brand" href="https://github.com/AarnoStormborn" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="icon">
                <a className="navbar-brand" href="https://www.linkedin.com/in/harsh-singh-4428241b4/" target="_blank" rel="noreferrer">
                  <i className="fab fa-circle fa-linkedin"></i>
                </a>
              </div>
              <div className="icon me-5">
                <a className="navbar-brand" href="https://www.kaggle.com/harshsingh2209" target="_blank" rel="noreferrer">
                  <i className="fab fa-circle fa-kaggle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 d-flex align-items-center justify-content-center bottom-div">
          <div className="banner-div">
            <img
              className="banner"
              src="/images/banner-1.png"
              style={{ display: banner!==1?'none':''}}
              alt=""
            />
            <img
              className="banner"
              src="/images/banner-2.png"
              style={{ display: banner!==2?'none':''}}
              alt=""
            />
            <img
              className="banner"
              src="/images/banner-3.png"
              style={{ display: banner!==3?'none':''}}
              alt=""
            />
            <img
              className="banner"
              src="/images/banner-4.png"
              style={{ display: banner!==4?'none':''}}
              alt=""
            />
            <img
              className="banner"
              src="/images/banner-5.png"
              style={{ display: banner!==5?'none':''}}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;