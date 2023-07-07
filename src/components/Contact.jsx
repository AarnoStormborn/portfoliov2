import React from "react";
import "../styles/home.css";

function Contact() {
  return (
    <>
      <div className="contact-section parallax-layer">
        <div className="top-div top-div-contact">
          <div className="col-sm-10 col-md-5 top d-flex flex-column justify-content-center">
            <div className="px-5 py-5">
              <h1 className="heading-home">
                <strong>Contact</strong>
              </h1>
              <p className="content">
                If you wish to get in touch, feel free to contact me! You can
                drop an email at harshsingh90220@gmail.com. Make sure to connect
                with me on{" "}
                <a
                  href="https://www.linkedin.com/in/harsh-singh-4428241b4/"
                  className="para-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                to stay updated. Check out my work on{" "}
                <a
                  href="https://github.com/AarnoStormborn"
                  className="para-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.kaggle.com/harshsingh2209"
                  className="para-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kaggle
                </a>
                . I am based in Mumbai, India.
              </p>
              <div className="d-flex justify-content-center">
                <a href="mailto:harshsingh90220@gmail.com" target="_blank" rel="noreferrer">
                  <button className="btn btn-outline-success px-5 py-3 mt-3">
                    Send Message!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-5 d-flex align-items-center justify-content-center">
            <iframe
              id="map"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230648.35552687803!2d72.80614708620246!3d19.08031742078628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7a13250e57f%3A0x8cad0728667da94f!2sMumbai%2C%20Maharashtra%20400083!5e0!3m2!1sen!2sin!4v1688242728792!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
