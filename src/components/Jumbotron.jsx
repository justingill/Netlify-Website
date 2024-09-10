import Container from 'react-bootstrap/Container';
import getRandomQuote from './Quotes';

function Jumbotron() {
  return (
    <Container fluid id="top-container">
      <Container fluid className="text-center" id="centered-container">
        <img src="src/assets/circle.png" class="img-fluid" width="150"></img>
        <h1>Justin F. Gill</h1>
        <a
          href="https://github.com/justingill/Resume-Portfolio/"
          id="linked_icons"
          onClick="gtag('event', 'view',{'event_category':'social_media','event_label':'github'});"
        >
          <i class="fab fa-github-square fa-3x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/justingill95/"
          id="linked_icons"
          onclick="gtag('event', 'view',{'event_category':'social_media','event_label':'linkedin'});"
        >
          <i class="fab fa-linkedin fa-3x"></i>
        </a>
        <Container fluid id="quote-container">
          <p id="inspiring-quote">{getRandomQuote()}</p>
        </Container>
      </Container>
    </Container>
  );
}

export default Jumbotron;
