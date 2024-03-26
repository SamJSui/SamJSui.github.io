// Projects.js
import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard'; // Adjust the import path as necessary

function Projects() {
  return (
    <section id="projects" className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={`${process.env.PUBLIC_URL}/assets/images/${project.image}`} // Adjust according to your setup
            description={project.description}
            liveUrl={project.liveUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
