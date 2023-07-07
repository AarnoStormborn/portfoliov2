import React, { useState, useEffect } from "react";

function WorkExp() {
  const [activeItem, setActiveItem] = useState(1);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHoverEnabled(true);;
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseEnter = (item) => {
    if (isHoverEnabled) {
      setActiveItem(item);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverEnabled) {
      setActiveItem(null);
    }
  };

  const isItemActive = (item) => {
    return activeItem === item;
  };

  return (
    <>
      <div className="work-exp">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center">
          <div className="heading mb-5">
            <h1 className="heading-profile text-center">Work Experience</h1>
          </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div
              className={`accordion-item mb-4 ${
                activeItem === 1 ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`accordion-button ${
                  isItemActive(1) ? "" : "collapsed"
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded={isItemActive(1) ? "true" : "false"}
              >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordion-header" id="flush-headingOne">
                    {" "}
                    Dun & Bradstreet
                  </h4>
                  <span className="period">July 10, 2023 - Present</span>
                </div>
              </button>

              <div
                id="flush-collapseOne"
                className={`accordion-collapse collapse ${
                  isItemActive(1) ? "show" : ""
                }`}
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="job-role">
                    <h6 className="role-type fw-bold">
                      Data Scientist (Intern)
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
                        Extract data from Publicly available sources to create
                        databases
                      </li>
                      <li>
                        Perform Data Preprocessing and Explore and Analyse these
                        datasets
                      </li>
                      <li>
                        Build Machine Learning Models for Prediction and
                        Inferences
                      </li>
                      <li>
                        Generate Reports and Dashboards based on results to
                        improve decision making
                      </li>
                    </ul>
                    <h6>
                      <strong>Skills</strong>
                    </h6>
                    <ul className="skills">
                      <li>Python</li>
                      <li>SQL</li>
                      <li>MS Excel</li>
                      <li>Power BI</li>
                      <li>Statistics & Probability</li>
                      <li>Machine Learning & NLP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`accordion-item my-4 ${
                activeItem === 2 ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`accordion-button ${
                  isItemActive(2) ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded={isItemActive(2) ? "true" : "false"}
                aria-controls="flush-collapseTwo"
              >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordion-header" id="flush-headingTwo">
                    Genius Vision Digital
                  </h4>
                  <span className="period">
                    December 5, 2022 - June 9, 2023
                  </span>
                </div>
              </button>
              <div
                id="flush-collapseTwo"
                className={`accordion-collapse collapse ${
                  isItemActive(2) ? "show" : ""
                }`}
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="job-role">
                    <h6 className="role-type fw-bold">
                      Backend Developer (Intern)
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
                </div>
              </div>
            </div>
            <div
              className={`accordion-item my-4 ${
                activeItem === 3 ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`accordion-button ${
                  isItemActive(3) ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded={isItemActive(3) ? "true" : "false"}
                aria-controls="flush-collapseThree"
              >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h4 className="accordion-header" id="flush-headingThree">
                    Freelance
                  </h4>
                  <span className="period">June 6, 2023 - Present</span>
                </div>
              </button>
              <div
                id="flush-collapseThree"
                className={`accordion-collapse collapse ${
                  isItemActive(3) ? "show" : ""
                }`}
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="job-role">
                    <h6 className="role-type fw-bold">
                      AI / ML / Backend Developer
                    </h6>
                  </div>
                  <h6>
                    <strong>About</strong>
                  </h6>
                  <p>
                    I recently started working Freelance projects. Freelancing
                    offers numerous benefits. Firstly, it empowers me to have
                    complete control over my work, allowing me to choose
                    projects that align with my skills, interests, and values.
                    Secondly, freelancing provides flexibility in terms of
                    setting my own schedule and working from any location,
                    enabling a better work-life balance. It also allows me to
                    leverage my expertise and earn income directly, without
                    intermediaries, potentially leading to higher earnings.
                    Lastly, freelancing promotes personal growth and development
                    as I continually adapt to new challenges, expand my network,
                    and gain a diverse range of experiences across different
                    industries and clients.
                  </p>
                  <div className="row">
                    <h6>
                      <strong>Servies</strong>
                    </h6>
                    <ul className="skills">
                      <li>Fullstack Development</li>
                      <li>Backend Development</li>
                      <li>Enterprise AI solutions</li>
                      <li>Machine Learning Systems</li>
                      <li>Analytics & BI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
