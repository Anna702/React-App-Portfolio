import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

const Projects = () => {
  return (
    <>
      <h1>Projects Gallery</h1>
      (projects.map(project => (
      <ProjectCard key={project.id} project={project} />) ))
    </>
  );
};

export default Projects;
