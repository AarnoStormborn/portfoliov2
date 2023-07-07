import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footer py-5 w-100">
        <div className="row">
          <div className="col-md-4">Copyright © Harsh Singh</div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center icons">
              <div className="icon">
                <a
                  className="navbar-brand"
                  href="https://github.com/AarnoStormborn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="icon">
                <a
                  className="navbar-brand"
                  href="https://www.linkedin.com/in/harsh-singh-4428241b4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-circle fa-linkedin"></i>
                </a>
              </div>
              <div className="icon">
                <a
                  className="navbar-brand"
                  href="https://www.kaggle.com/harshsingh2209"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-circle fa-kaggle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">Created : 2023</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
