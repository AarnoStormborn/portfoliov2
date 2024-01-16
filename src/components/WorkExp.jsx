import React, { useState } from "react";
import '../styles/profile.css';

function WorkExp() {

  const [activeButton, setActiveButton] = useState('button-1');

  const handleClick = (buttonId) => {
    setActiveButton(buttonId)
  }

  return (
    <>
      <div className="work-exp">
        <div className="heading mb-5">
        <h1 className="heading-profile text-center">Work Experience</h1>
      </div>
      <div className="card work-exp-card p-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className={`nav-item ${activeButton==='button-1'?'nav-item-active':''}`}>
              <button className={`btn btn-lg carouselBtn py-3 ${activeButton === 'button-1'? 'btn-active':''}`}
                onClick={() => handleClick('button-1')}>Harman</button>
            </li>
            <li className={`nav-item ${activeButton==='button-2'?'nav-item-active':''}`}>
              <button className={`btn btn-lg carouselBtn py-3 ${activeButton === 'button-2'? 'btn-active':''}`}
                onClick={() => handleClick('button-2')}>D&B</button>
            </li>
            <li className={`nav-item ${activeButton==='button-3'?'nav-item-active':''}`}>
              <button className={`btn btn-lg carouselBtn py-3 ${activeButton === 'button-3'? 'btn-active':''}`}
                onClick={() => handleClick('button-3')}>GVD</button>
            </li>
          </ul>
        </div>
        {activeButton === 'button-1' && <div className="card-body">
          <div>
            <h4 className="card-title">Harman DTS India</h4>
          </div>
          <div className="job-role">
            <h6 className="role-type fw-bold">
              Data Science Intern
              <br />
              <span className="period">December 2023 - Present</span>
            </h6>
          </div>
          <h6>
            <strong>About</strong>
          </h6>
          <p>
          Harman India stands as a prominent force in the technology sector, specializing in connected
          solutions across automotive, consumer, and enterprise sectors. A subsidiary of Samsung Electronics,
          Harman is renowned for its innovative audio systems and connected car technologies. With a strong
          commitment to excellence, the company has become a key player in shaping the technology landscape
          in India. Harman's presence is marked by its cutting-edge solutions that significantly enhance user
          experiences in areas such as automotive and consumer electronics.
          </p>
          <div className="row">
            <h6>
              <strong>Work</strong>
            </h6>
            <ul className="exps">
              <li>
                Worked on latest AI technologies for client projects
              </li>
              <li>
                Developed a Face Detection and Emotion Classification model pipeline achieving 96% detection rate and
                75% accuracy on classification
              </li>
              <li>
                Developed an API in Flask for deploying the pipeline to AWS Marketplace
              </li>
            </ul>
            <h6>
              <strong>Skills</strong>
            </h6>
            <ul className="skills">
              <li>Python</li>
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Generative AI</li>
              <li>API & Backend Development</li>
            </ul>
          </div>
        </div>}
        {activeButton === 'button-2' && <div className="card-body">
          <div>
            <h4 className="card-title">Dun & Bradstreet</h4>
          </div>
          <div className="job-role">
            <h6 className="role-type fw-bold">
              Data Science Intern
              <br />
              <span className="period">July 2023 - November 2023</span>
            </h6>
          </div>
          <h6>
            <strong>About</strong>
          </h6>
          <p>
            The Dun & Bradstreet Corporation is an American company that
            provides commercial data, analytics, and insights for
            businesses. Headquartered in Jacksonville, Florida, the
            company offers a wide range of products and services for
            risk and financial analysis, operations and supply, and
            sales and marketing professionals, as well as research and
            insights on global business issues. It serves customers in
            government and industries such as communications,
            technology, strategic financial services, and retail,
            telecommunications, and manufacturing markets. Often
            referred to as D&B, the company's database contains over 500
            million business records worldwide.
          </p>
          <div className="row">
            <h6>
              <strong>Work</strong>
            </h6>
            <ul className="exps">
              <li>
                Operated within a Big Data environment of Spark using PySpark and Spark SQL
              </li>
              <li>
                Performed Prospect Intelligence and Deep Profiling to identify potential business opportunuties
              </li>
              <li>
                Examined Total Addressable Markets to identify businesses within Geographical and Industrial constraints
              </li>
              <li>
                Drafted Reports and Dashboards to provide Analysis and Results delivery
              </li>
            </ul>
            <h6>
              <strong>Skills</strong>
            </h6>
            <ul className="skills">
              <li>Python</li>
              <li>SQL</li>
              <li>MS Excel</li>
              <li>PySpark</li>
              <li>Business Intelligence</li>
              <li>Databricks</li>
            </ul>
        </div>
        </div>}
        {activeButton === 'button-3' && <div className="card-body">
          <div>
            <h4 className="card-title">Genius Vision Digital</h4>
          </div>
          <div className="job-role">
            <h6 className="role-type fw-bold">
              Backend Developer (Intern)
              <br />
              <span className="period">December 2022 - June 2023</span>
            </h6>
          </div>
          <h6>
            <strong>About</strong>
          </h6>
          <p>
            Genius Vision Digital (GVD) is a world-class professional
            Solution Provider that helps enterprises and communities
            thrive the physical security and safety threats by advancing
            the security technology. They are a high pance company in
            India and the backbone of this credibility is strong
            management, disciplined and committed team besides promising
            CSI (Customer Satisfaction India). They adhere to the
            highest ethical business standards and enable enterprises to
            lead in this new era of disruption with industry-best
            solutions tailored to meet their real-world problems.
          </p>
          <div className="row">
            <h6>
              <strong>Work</strong>
            </h6>
            <ul className="exps">
              <li>
                Optimized existing backend systems with more
                functionalites
              </li>
              <li>
                Developed backends for CRM portal, Blog and File
                Management System integrated with AWS S3
              </li>
              <li>
                Contributed to development of Workflow Engine and
                Building Management System
              </li>
              <li>
                Developed Clarify, a complete web-based Computer Vision
                system for Training and Inference with YOLOv5
              </li>
              <li>
                Performed other miscellaneous tasks such as hardware
                benchmarking and API testing
              </li>
            </ul>
            <h6>
              <strong>Skills</strong>
            </h6>
            <ul className="skills">
              <li>Python</li>
              <li>Django</li>
              <li>Database Design</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Computer Vision</li>
              <li>Systems Design</li>
            </ul>
          </div>
        </div>}
      </div>
      </div>
    </>
  )
}

export default WorkExp;