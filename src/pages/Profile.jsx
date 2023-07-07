import React from "react";
import Education from "../components/Education";
import WorkExp from "../components/WorkExp";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <div className="container-fluid g-0 mt-1 pt-1 mx-auto profile-page">
        <div className="profile-into d-flex justify-content-center intro">
          <div className="col-sm-10 col-md-5 d-flex justify-content-center mt-5">
            <div className="px-3 py-5 my-5">
              <img src="/images/main.jpg" style={{ borderRadius: "1%" }} alt="" />
              <div className="mt-4">
                <h3 className="text-center"><strong>Harsh Singh</strong></h3>
                <h6 className="text-center">Mumbai, India</h6>
                <h6 className="text-center">September 22<sup>nd</sup>, 2002</h6>
              </div>
            </div>
          </div>
        </div> <hr />
        <Education />
        <WorkExp />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Resume;
