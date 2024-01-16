import React from "react";
import Project from "./Project";
import { projects } from "./data";
import "../styles/projects.css";


function Projects() {

  return (
    <>
      <div className="container-fluid g-0 my-3 mx-auto" id="projects">
        <div className="d-flex justify-content-center projects">
          <h1 className="heading-profile projects-heading">Projects</h1>
        </div>
        <div className="row gap-5 my-5 justify-content-center projects-grid">
        {
          projects.map(project => <Project key={project.id} project={project} />)
        }
        </div>
      </div>
    </>
  );
}

export default Projects;
