import React, { useState, useEffect } from 'react';

function ProgressBar({ language, proficiency }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Set the initial style to start the width from 0
    setStyle({ width: '0%', opacity: 0 });

    // Set the style to the actual width with a delay
    const timer = setTimeout(() => {
      setStyle({
        width: `${proficiency}%`,
        opacity: 1,
        transition: 'width 1s ease-in-out, opacity 0.5s ease-in-out',
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="mb-4 mx-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{language}</span>
        <span className="text-med font-medium">{proficiency}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-4 rounded-full" style={style}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
