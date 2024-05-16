import React from 'react';
import ResumeDownloadButton from '../components/ResumeDownloadButton';
import Timeline from '../components/Timeline';
import experiencesData from '../data/experiences.json';
import ExperiencesAccordion from '../components/ExperienceAccordion';

function Experiences() {
  return (
    <section id="experiences" className="container mx-auto my-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <ResumeDownloadButton />
      {experiencesData.map((exp, index) => (
        <ExperiencesAccordion key={index} {...exp} />
      ))}
      <Timeline />
    </section>
  );
}

export default Experiences;
