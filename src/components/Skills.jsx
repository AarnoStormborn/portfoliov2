import React from "react";
import { skills, tools } from "./data";
import '../styles/skills.css';

function Skills() {

  let firstHalf = skills.slice(0, 7);
  let secondHalf = skills.slice(7, 14);

  let skillsList = [firstHalf, secondHalf]

  let t1 = tools.slice(0,4)
  let t2 = tools.slice(4,8)
  let t3 = tools.slice(8,12)
  let t4 = tools.slice(12,16)

  let toolsList = [t1, t2, t3, t4];

  return (
    <>
      <div className="skills-section" id="skills">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center skills-subdiv">
          <div className="heading mb-5">
            <h1 className="heading-skills text-center">Skills</h1>
          </div>
          <div className="row">
            {skillsList.map((s) => (
            <div className="col-md-6">
              <div className="inner-div">
                {s.map((skill) => (
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
            ))}
          </div>
        </div>
      </div>

      <div className="tools-section">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center tools-subdiv">
          <div className="heading mb-5">
            <h1 className="heading-skills text-center">Tools</h1>
          </div>
          {toolsList.map((t) => (
            <div className="row my-4">
            {t.map((tool) => (
              <div className="col-6 col-md-3 tech-row">
                <img className={`tech-icon ${tool.id}`} src={`${tool.imgPath}`} alt="" />
                <span className="mt-3">{tool.name}</span>
              </div>
            ))}
          </div>
          ))}
        </div>
      </div>

      <div className="extras">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center">
          <div className="heading mb-5">
            <h1 className="heading-skills text-center">Extras</h1>
          </div>
          <div className="row">
            <div className="col-md-6 first">
              <h3 className="certifications  text-center">Certifications</h3>
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
              <h3 className="extra-curricular text-center">Extra-Curricular</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
