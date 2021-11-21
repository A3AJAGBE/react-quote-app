import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {React, useState, useEffect} from 'react';


const App = () => {

  const [quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes").then(response => response.json()).then(data => {
      const randNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randNum]);
    });
  }

  useEffect(() => {
    getQuotes();
  }, []);

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
                  {quotes.text}
              </p>
            </blockquote>
          </Card.Body>

          <Card.Title id="author"> <h3>&mdash; {quotes.author}</h3> </Card.Title>

          <Card.Footer>
              <Row className="flex-md-row-reverse my-2">
                <Col md={6} className="d-grid d-md-flex justify-content-md-end">
                  <Button className="btn btn-lg coral" id="new-quote" onClick={getQuotes}>
                    {Rotate} New 
                  </Button>

                  <hr />
                </Col>
                <Col className="d-grid d-md-flex">
                  <a href={`https://twitter.com/intent/tweet?text="${quotes.text}" - ${quotes.author} via https://pc-quotes-api.herokuapp.com/`} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-info" id="tweet-quote">{Twitter} Tweet</a>
                </Col>
              </Row>
          </Card.Footer>

        </Card>
      </div>
    </Container>
  );
}

export default App;
