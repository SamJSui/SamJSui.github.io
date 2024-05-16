import React from 'react';
import { motion } from 'framer-motion';
import {
  SiAmazonaws,
  SiAmazonrds,
  SiBootstrap,
  SiCss3,
  SiDigitalocean,
  SiDji,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

const technologyIcons = {
  "AWS": SiAmazonaws,
  "Bootstrap": SiBootstrap,
  "CSS": SiCss3,
  "DigitalOcean": SiDigitalocean,
  "DJI": SiDji,
  "Electron": SiElectron,
  "Express": SiExpress,
  "Firebase": SiFirebase,
  "Flask": SiFlask,
  "Flutter": SiFlutter,
  "GCP": SiGooglecloud,
  "HTML": SiHtml5,
  "JavaScript": SiJavascript,
  "Meta": SiMeta,
  "MongoDB": SiMongodb,
  "Node.js": SiNodedotjs,
  ".NET": SiDotnet,
  "PostgreSQL": SiPostgresql,
  "Python": SiPython,
  "RDS": SiAmazonrds,
  "React": SiReact,
  "Tailwind": SiTailwindcss,
};

const ProjectCard = ({ title, image, description, liveUrl, githubUrl, technologies }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      className="shadow-lg rounded-lg overflow-hidden group cursor-pointer"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          <CardContent
            title={title}
            image={image}
            description={description}
            liveUrl={liveUrl}
            githubUrl={githubUrl}
            technologies={technologies}
          />
        </a>
      ) : (
        <div className="flex flex-col h-full">
          <CardContent
            title={title}
            image={image}
            description={description}
            liveUrl={liveUrl}
            githubUrl={githubUrl}
            technologies={technologies}
          />
        </div>
      )}
    </motion.div>
  );
};

const CardContent = ({ title, image, description, liveUrl, githubUrl, technologies }) => (
  <>
    <img src={image} alt={title} className="w-full h-48 object-contain" /> {/* Use object-cover for better image fit */}
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-bold">{title}</h3>
      <p className="flex-grow">{description}</p>
      <div className="flex flex-wrap mt-2">
        {technologies.map((tech, index) => {
          const IconComponent = technologyIcons[tech]; // Corrected to use the correct mapping object
          return IconComponent ? (
            <span key={index} className="inline-flex items-center mr-2 text-2xl">
              <IconComponent />
            </span>
          ) : null;
        })}
      </div>
      {liveUrl && <a href={liveUrl} className="text-blue-500 hover:text-blue-700 mt-2 self-start">View Live Demo</a>}
    </div>
  </>
);

export default ProjectCard;
