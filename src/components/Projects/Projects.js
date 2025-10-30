import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/grocery.jpeg";
import Brdx from "../../Assets/Projects/Machine_learning.png";

import caredot from "../../Assets/Projects/caredot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caredot}
              isBlog={false}
              title="Care-dot"
              description="A website used to manage an old-age home with multiple functionalities like booking doctors etc."
              ghLink="https://github.com/Devjith-P/Care-dot"
              demoLink="https://caredot.netlify.app/index.html  "
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Brdx}
              isBlog={false}
              title="BrDX"
              description="Brain Tumour classification and segmentation using CNN and U-NET."
              ghLink="https://github.com/Devjith-P/BrDX"
              demoLink="https://brdxmodel.streamlit.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Smart Grocery and Recipe Recomendation"
              description="A model that predicts major nutrient deficiency and suggest groceries and recipe."
              ghLink="https://github.com/Devjith-P/Smart-Grocery"
              demoLink="https://smartgrocery.streamlit.app/"
            />
          </Col>






        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
