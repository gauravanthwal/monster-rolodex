import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import data from "./data";

const Project = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <section className="projects">
      <h2 className="text-center">Some of my past projects</h2>
      <div className="grid-3 projects container">
        {seeMore
          ? data.slice(0, data.length).map((project) => {
              return <ProjectItem project={project} />;
            })
          : data.slice(0, 3).map((project) => {
              return <ProjectItem project={project} />;
            })}
      </div>
      <div className="all-center">
        <button className="btn btn-toggle" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const { img, title, desc, url, git, responsive } = project;
  return (
    <div className="card-project">
      <img src={img} alt={title} />
      <div className="expand">
        <h4 className="">{title}</h4>
      </div>

      <div className="stuffs">
        <p>{desc}</p>
        <div className="buttons">
          <div
            className="res"
            style={{ marginBottom: "5px", fontSize: ".9rem" }}
          >
            Responsive <span>{responsive ? <FaCheck /> : <ImCross />}</span>
          </div>
          <a href={url} className="btn btn1" target="blank">
            Open
          </a>
          <a href={git} className="btn btn2" target="blank">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
