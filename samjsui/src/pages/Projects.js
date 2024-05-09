// Projects.js
import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="container mx-auto my-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={`${process.env.PUBLIC_URL}/assets/images/${project.image}`}
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
