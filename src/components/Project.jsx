import React from "react";

function Project(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.project.img} className="card-img-top" alt="..." />
      <div className="card-overlay">
        <div className="card-body">
          <h5 className="card-title">{props.project.title}</h5>
          <p className="card-text">{props.project.desc}</p>
        </div>
        <div className="card-footer">
          <a
            href={props.project.link}
            className="btn btn-sm btn-outline-success linkBtn"
            target="_blank"
            rel="noreferrer"
          >
            🔗
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
