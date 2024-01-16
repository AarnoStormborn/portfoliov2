import React from "react";
import "../styles/profile.css";

function Education() {
  return (
    <>
      <div className="education">
        <div className="col-sm-10 col-md-6 top d-flex flex-column justify-content-center">
          <div className="heading mb-5">
            <h1 className="heading-profile text-center">Education</h1>
          </div> 
          <div className="item mb-3">
            <div className="row">
              <div className="col-md-6 first">
                <h4>NMIMS MPSTME</h4>
                <h6 className="org-type">Engineering College</h6>
              </div>
              <div
                className="col-md-6 second"
              >
                <span className="period py-1">August 10, 2020 - Present</span>
                <span className="grade py-1">Grade: 3.68/4.00 CGPA</span>
              </div>
            </div> <hr className="break"></hr>
          </div>
          <div className="item mb-3">
            <div className="row">
              <div className="col-md-6 first">
                <h4>Pace Junior Science College</h4>
                <h6 className="org-type">Junior College</h6>
              </div>
              <div
                className="col-md-6 second"
              >
                <span className="period py-1">April 1, 2018 - March 30, 2020</span>
                <span className="grade py-1">Grade: 82.69%</span>
              </div>
            </div> <hr className="break"></hr>
          </div> 
          <div className="item mb-3">
            <div className="row">
              <div className="col-md-6 first">
                <h4>KLE School</h4>
                <h6 className="org-type">High School</h6>
              </div>
              <div
                className="col-md-6 second"
              >
                <span className="period py-1">June 1, 2016 - March 30, 2018</span>
                <span className="grade py-1">Grade: 84.21%</span>
              </div>
            </div> <hr className="break"></hr>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Education;
