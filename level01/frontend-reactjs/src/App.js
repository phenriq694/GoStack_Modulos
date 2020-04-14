import React, { useState, useEffect } from 'react';

import api from './services/api'; 

import './App.css';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  return (
    <>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
    </>
  );
}
