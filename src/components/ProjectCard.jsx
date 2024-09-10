import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function ProjectCard(props) {
  return (
    <Col md={4} id="column_card">
      <Container id="project-card">
        <figure>
            <img src={props.image} id="portfolio_pic" />
            <a href={props.proj_link} id="proj_tag" onclick="gtag('event', 'view',{'event_category':'project_link','event_label':${props.event_label}});">
                <h2 id="proj_title">{props.project_title}</h2>
            </a>
            <Container className="lead" id="proj_descrip">{props.project_description}</Container>
            <br />
            <Container className="lead" id="proj_library"><span>Libraries Used:</span> {props.libraries}</Container>
        </figure>
      </Container>
    </Col>
  );
}

export default ProjectCard;
