import React from "react";
import { skills } from "./data";
import { Link } from "react-router-dom";

function Skills() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  let firstHalf = skills.slice(0, 5);
  let secondHalf = skills.slice(5, 10);

  return (
    <>
      <div className="skills-section">
        <div className="col-sm-10 col-md-8 top d-flex flex-column justify-content-center h-100 skills-subdiv">
          <div className="heading mb-5">
            <h1 className="heading text-center">Skills</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="inner-div">
                {firstHalf.map((skill) => (
                  <div key={skill.id}>
                    <span className="progress-label" key={skill.id}>
                      {skill.name}
                    </span>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percent}%` }}
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <strong>{skill.percent}%</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner-div">
                {secondHalf.map((skill) => (
                  <div key={skill.id}>
                    <span className="progress-label" key={skill.id}>
                      {skill.name}
                    </span>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.percent}%` }}
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <strong>{skill.percent}%</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center projectBtn">
            <Link className="btn btn-outline-success d-block px-3 py-2"
              to="/projects" onClick={handleClick}>
              See Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="extras">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center">
          <div className="heading mb-5">
            <h1 className="heading-profile text-center">Extras</h1>
          </div>
          <div className="row">
            <div className="col-md-6 first">
              <h4 className="certifications  text-center">Certifications</h4>
              <ul>
                <li>
                  <strong>IBM</strong> Python for Data Science
                </li>
                <li>
                  <strong>Kaggle</strong> Intro to Machine Learning
                </li>
                <li>
                  <strong>LinkedIn</strong> Web Scraping with Python
                </li>
                <li>
                  <strong>Udemy</strong> Python for Computer Vision
                </li>
              </ul>
            </div>
            <div className="col-md-6 second">
              <h4 className="extra-curricular text-center">Extra-Curricular</h4>
              <ul>
                <li>
                  <strong>Kaggle 3X Experts</strong> -<br />
                  Notebook, Dataset, Discussions
                </li>
                <li>
                  <strong>Student Chapters</strong> -<br />
                  CodeChef & IET
                </li>
                <li>
                  <strong>Volunteering</strong> -<br />
                  Rotaract Club of Bombay Airport
                </li>
              </ul>
            </div>
            <div className="my-5 d-flex justify-content-center download-button">
              <a className="btn btn-outline-success d-block px-3 py-2"
                href="https://drive.google.com/file/d/19aSMSiMXccNzlCAPQSl26E9pR4xaS8CK/view?usp=sharing"
                target="_blank" rel="noreferrer">
                See Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
