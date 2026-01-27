const Projects = () => {
  return (
    <section id="projects" className="projects">
      <p>Projects</p>
      <div className="projects-container">
        <div className="project">
          <img src="/AgapeLogo.png" alt="logoProject" onContextMenu={(e) => e.preventDefault()} draggable="false"/>
          <p>Plataforma de donaciones económicas sin fines de lucro<br/>
          En conjunto con Victoriano Feijoo</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
