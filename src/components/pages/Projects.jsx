import CardProject from "../components/ProjectCard";
import projects from "../projects.json";

const Projects = () => {
  return (
    <>
      <h1>Projects Gallery</h1>

      {projects.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </>
  );
};

export default Projects;
