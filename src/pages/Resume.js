import React from 'react';
import resumeUri from '../images/Screenshot 04.png';

export default function Resume() {
  return (
    <div>
      <h1>Here is my Resume</h1>
      <img src={resumeUri} alt="Resume screenshot" />
    </div>
  );
}