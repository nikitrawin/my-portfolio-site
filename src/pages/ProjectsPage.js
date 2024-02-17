import projectImage01 from "./../img/projects/01.jpg"
import projectImage02 from "./../img/projects/02.jpg"
import projectImage03 from "./../img/projects/03.jpg"
import projectImage04 from "./../img/projects/04.jpg"
import projectImage05 from "./../img/projects/05.jpg"
import projectImage06 from "./../img/projects/06.jpg"

const ProjectsPage = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={projectImage01}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={projectImage02}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={projectImage03}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <img
                src={projectImage04}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Dating app</h3>
            </li>
            <li className="project">
              <img
                src={projectImage05}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Landing</h3>
            </li>
            <li className="project">
              <img
                src={projectImage06}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Gaming community</h3>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
