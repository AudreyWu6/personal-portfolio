import React from 'react';
import { Col } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, githubLink, demoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="btn-container centered">
            <a href={githubLink} className="btn btn-color-2 btn-large" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={demoLink} className="btn btn-color-2 btn-large" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;