import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App = () => {

  const Twitter = <FontAwesomeIcon icon={faTwitter} />
  const Rotate = <FontAwesomeIcon icon={faSpinner} />

  return (
    <Container fluid id="App-Container">
      <div className="Quote-Div text-center">
        <h1 className="display-4 fw-bold mb-4">A3AJAGBE Quote App</h1>

        <Card id="App-Card" className="col-lg-6 mx-auto">
          <Card.Body>
            <blockquote className="blockquote mb-0" id="text">
              <p className="lead mb-2 fs-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ex, maximus vel aliquet non, venenatis a urna. Vestibulum felis sem, ullamcorper ut posuere in, consequat quis mauris.
              </p>
            </blockquote>
          </Card.Body>

          <Card.Title id="author"> <h3>&mdash; Quote By</h3> </Card.Title>

          <Card.Footer>
              <Row className="flex-md-row-reverse my-2">
                <Col md={6} className="d-grid d-md-flex justify-content-md-end">
                  <a href="https://getbootstrap.com/docs/5.1/examples/heroes/" target="_blank" rel="noopener noreferrer" className="btn btn-lg coral" id="new-quote"> {Rotate} New </a>

                  <hr />
                </Col>
                <Col className="d-grid d-md-flex">
                  <a href="https://getbootstrap.com/docs/5.1/examples/heroes/" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-info" id="tweet-quote">{Twitter} Tweet</a>
                </Col>
              </Row>
          </Card.Footer>

        </Card>
      </div>
    </Container>
  );
}

export default App;
