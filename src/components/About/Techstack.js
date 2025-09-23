import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import {
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiStreamlit,
  SiLinux,
  SiVisualstudiocode,
  SiPowerbi,
} from "react-icons/si";
import { FaDatabase, FaWindows } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Python</p>
      </Col>

      {/* Databases / SQL */}
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>MySQL</p>
      </Col>

      {/* Machine Learning / Deep Learning */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Keras</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Scikit-learn</p>
      </Col>

      {/* Data Science Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>NumPy</p>
      </Col>

      {/* Visualization & Apps */}
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Streamlit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Power BI</p>
      </Col>

      {/* Platforms & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: "0.3em", marginTop: "5px" }}>Linux</p>
      </Col>
    </Row>
  );
}

export default Techstack;
