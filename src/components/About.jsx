import React from "react";
import "../styles/home.css";

function About() {

  return (
    <>
      <div className="about-me parallax-layer" id="about">
        <div className="top-div">
          <div className="col-sm-10 col-md-4 d-flex align-items-center justify-content-center top-image-div">
            <div className="px-3 py-5 my-5">
              <img
                src="/images/main.jpg"
                style={{ borderRadius: "5%" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center bottom-content-div">
            <div className="px-5 py-5">
              <h1 className="heading-home">
                <strong>About Me</strong>
              </h1>
              <p className="content">
              <strong>Data Scientist. AI and ML enthusiast. Tech geek.</strong> <br />

              Engineering student at Mukesh Patel School of Technology Management and Engineering.
              Currently learning the principles of operating in Real World scenarios and Solution-Centric Strategies.
              I enjoy problem-solving and creating solutions. Willing to work in any direction which brings learning
              opportunities and connections with people in various fields. Committed to leveraging my skills to contribute
              to the development and implementation of innovative data-driven solutions that drive business growth and 
              optimize decision-making processes.
              My key skills and learning fields include Machine Learning, Deep Learning,
              NLP, MLOps and Software Development. 
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <div className="my-5 d-flex justify-content-center download-button">
            <a className="btn btn-outline-success d-block px-3 py-2"
              href="https://drive.google.com/file/d/1xDJ9-XVPQyzyPzF3CsMjJvHNB0D2gSOB/view"
              target="_blank" rel="noreferrer">
              See My Resume!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
