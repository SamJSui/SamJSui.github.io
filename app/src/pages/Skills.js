import React from 'react';
import ProgressBar from '../components/ProgressBar';
import programmingLanguages from '../data/programming_languages.json';
import SkillsGrid from '../components/SkillsGrid';

function Skills() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mx-4 py-4">Programming Languages</h2>
      {programmingLanguages.map(({ language, proficiency }) => (
        <ProgressBar key={language} language={language} proficiency={proficiency} />
      ))}
      <SkillsGrid />
    </div>
  );
}

export default Skills;