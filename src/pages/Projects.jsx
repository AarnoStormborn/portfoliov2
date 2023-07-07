import React from "react";
import Project from "../components/Project";
import Footer from "../components/Footer";
import { projects } from "../components/data";
import "../styles/projects.css";


function Projects() {

  return (
    <>
      <div className="container-fluid g-0 mt-1 pt-1 mx-auto home-page">
        <div className="d-flex justify-content-center projects">
          <h1 className="heading-profile projects-heading"><strong>Projects</strong></h1>
        </div>
        <div className="row gap-5 my-5 justify-content-center">
        {
          projects.map(project => <Project key={project.id} project={project} />)
        }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
