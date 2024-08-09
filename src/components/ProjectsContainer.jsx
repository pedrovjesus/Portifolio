import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Clique no botão para ver meus projetos recentes</p>

      <Link to="/portifolio/projects" className="btn">
        Ver projetos
      </Link>
    </section>
  );
};

export default ProjectsContainer;
