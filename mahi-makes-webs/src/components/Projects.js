import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/Projects.css';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjectsData(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container-fluid" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="row">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">View Project</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
