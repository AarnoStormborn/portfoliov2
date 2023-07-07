import React from "react";
import Particle from "./Particle";
import "../styles/home.css";

function Intro() {
  return (
    <>
      <Particle />
      <div className="row intro-section parallax-layer">
        <div className="col-sm-12 d-flex align-items-center justify-content-center">
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
                      Backend Developer
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
      </div>
    </>
  );
}

export default Intro;