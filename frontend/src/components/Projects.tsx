import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  githubLink: string;
  demoLink: string;
}

export const Projects: React.FC = () => {

  const projects: Project[] = [
    {
      title: "Blogs",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/AudreyWu6/Blog-Website",
      demoLink: "https://66e8ed13ed55bb7833c1b204--rainbow-halva-10ef8d.netlify.app/",
    },
    {
      title: "Discussion Platform",
      description: "Design & Development",
      imgUrl: projImg1,
      githubLink: "https://github.com/AudreyWu6/online-discussion-platform",
      demoLink: "https://discussion-platform-demo.com",
    },
    {
      title: "Slides Presentation",
      description: "Design & Development",
      imgUrl: projImg2,
      githubLink: "https://github.com/AudreyWu6/slides-app",
      demoLink: "https://business-startup-demo.com",
    },
    
    // Add more projects with githubLink and demoLink
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ALL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubLink={project.githubLink}
                              demoLink={project.demoLink}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubLink={project.githubLink}
                              demoLink={project.demoLink}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>In Progress...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}