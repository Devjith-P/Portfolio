import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science Engineering graduate with a strong
              background in
              <i>
                <b className="purple"> Python </b>
              </i>
              and experience in working with{" "}
              <b className="purple">SQL</b> and{" "}
              <b className="purple">Data Science tools.</b>
              <br />
              <br />
              My main areas of interest are{" "}
              <i>
                <b className="purple">Machine Learning</b>
              </i>
              ,{" "}
              <i>
                <b className="purple">Deep Learning</b>
              </i>{" "}
              and building{" "}
              <b className="purple">data-driven solutions</b> that solve
              real-world problems.
              <br />
              <br />
              I have worked with frameworks and libraries like{" "}
              <i>
                <b className="purple">
                  TensorFlow, Keras, Scikit-learn, Pandas, Numpy and Streamlit
                </b>
              </i>{" "}
              and I’m also skilled in{" "}
              
              <b className="purple">MySQL</b> for data visualization and
              applications.
              <br />
              <br />
              Along with technical skills, I value{" "}
              <i>
                <b className="purple">
                  leadership, critical thinking, and time management
                </b>
              </i>{" "}
              which help me grow and contribute effectively in teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Devjith-P"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/devjithp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devjith._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
