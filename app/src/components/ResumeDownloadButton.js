import React from 'react';

function ResumeDownloadButton() {
    return (
        <div className="text-right my-4">
        <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`} // Adjust the path to where your resume is located within the public folder
            download="YourName_Resume.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Download Resume
        </a>
        </div>
    );
}

export default ResumeDownloadButton;