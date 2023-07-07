import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function About() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="about-me parallax-layer">
        <div className="top-div">
          <div className="col-sm-10 col-md-4 d-flex align-items-center justify-content-center">
            <div className="px-3 py-5 my-5">
              <img
                src="/images/main.jpg"
                style={{ borderRadius: "5%" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center">
            <div className="px-5 py-5">
              <h1 className="heading-home">
                <strong>About Me</strong>
              </h1>
              <p className="content">
                I am a driven and dedicated data science student specializing in
                the areas of data analytics, machine learning, and business
                intelligence. With a strong enthusiasm for developing
                cutting-edge solutions, my focus is on utilizing data to drive
                business growth and enhance decision-making processes. I possess
                a deep passion for applying my skills and knowledge to
                contribute effectively in practical settings. Embracing the
                opportunity to work in a dynamic team environment, I am
                committed to continuous learning and growth, aiming to further
                refine my technical and analytical abilities. My goal is to make
                a meaningful impact by leveraging data science to solve complex
                challenges and drive innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-div ">
          <div className="text-center">
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              <button
                type="button"
                className="btn btn-outline-success d-block px-5 py-3"
              >
                See My Profile!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
