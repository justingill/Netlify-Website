import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function BottomDiv() {
  return (
    <Container fluid className="text-center" id="bottom-div">
      <Row>
        <Col md={4}>
          <h3>About Me</h3>
          <Container className="lead" id="first_container">
            I’m a software engineer with a knack for backend development, API
            integration, and handling data in all its forms. Over the past five
            years, I’ve dived into various tech challenges and loved every
            minute of it. My journey has taken me through everything from
            fine-tuning systems and speeding up queries to building cool tools
            that help businesses thrive. My work has ranged from creating
            efficient backend solutions to collaborating with diverse teams—from
            analytics to sales—to discuss and implement tech strategies. I’ve
            even had the chance to be the Sales Engineer in over 50 Proof of
            Concept calls, helping clients understand how Machine Learning
            models can fit into their tech stack and make impactful changes.
            When I'm not coding, I’m probably reading up on the latest in tech
            or exploring new tools. I’m always on the lookout for ways to grow
            and contribute, whether it's through optimizing code or finding new
            solutions to complex problems. Currently, I'm focused on bringing my
            skills to new challenges and helping organizations make smarter,
            data-driven decisions.
          </Container>
        </Col>
        <Col md={4} id="middle">
          <h3>Education</h3>
          <a href="https://www.unr.edu/" id="linked_icons">
            <img src="/unr.png" id="unr-pic"></img>
          </a>
          <Container className="text-start" id="education_info_first">
            <span>Degree Earned:</span> B.S. Statistics minor Comp Sci. &
            Engineering
          </Container>
          <Container className="text-start" id="education_info">
            <span>Graduated:</span> August 2018
          </Container>
          <Container className="text-start" id="education_info">
            <span>GPA:</span> 3.68
          </Container>
          <Container className="text-start" id="education_info">
            <span>Major Coursework:</span> Real Analysis, Linear Regression,
            Statistical Theory, Probability Theory, Mathematical Modeling,
            Numerical Methods, Deterministic Operations Research, Linear
            Algebra, Differential Equations
          </Container>
          <Container className="text-start" id="education_info_last">
            <span>Minor Coursework:</span> Operating Systems, Data Structures,
            Prog. Language Implementations, Embedded System, Computer
            Organization
          </Container>
        </Col>
        <Col md={4}>
          <h3>Skills</h3>
          <Row id="skill_row">
            <Col>
              <i class="fab fa-python fa-3x"></i>
              <h4>Python</h4>
            </Col>
            <Col>
              <i class="fab fa-cuttlefish fa-3x"></i>
              <h4>C++</h4>
            </Col>
            <Col>
              <i class="fas fa-database fa-3x"></i>
              <h4>SQL</h4>
            </Col>
          </Row>
          <Row id="skill_row">
            <Col>
              <i class="fab fa-react fa-3x"></i>
              <h4>React</h4>
            </Col>
            <Col>
              <i class="fab fa-js fa-3x"></i>
              <h4>JavaScript</h4>
            </Col>
            <Col>
              <i class="fab fa-html5 fa-3x"></i>
              <h4>HTML</h4>
            </Col>
          </Row>
          <Row id="skill_row">
            <Col>
              <i class="fab fa-css3-alt fa-3x"></i>
              <h4>CSS</h4>
            </Col>
            <Col>
              <i class="fab fa-bimobject fa-3x"></i>
              <h4>Bootstrap</h4>
            </Col>
            <Col>
              <i class="fas fa-file-excel fa-3x"></i>
              <h4 id="last_h4">Excel</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomDiv;
