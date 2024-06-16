import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import OJP from "../../Assets/Projects/ojp.jpg";
import rrw from "../../Assets/Projects/rrw.jpg";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={rrw}
              isBlog={false}
              title='Recipe App'
              description='Recipe website to get any recipe with just on ekyword related to which you want.'
              ghLink='https://github.com/harshvinayak0809/react-food-recipe'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={OJP}
              isBlog={false}
              title='Job Portal'
              description='Portal to connect employer and seeker with ease at one place.'
              ghLink='https://github.com/harshvinayak0809/online-job-portal'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
