import React from "react";

import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Hand from "./Components/Hand";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>Menu</Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="info">Xahel is the Card Czhar</Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Cards in play</h2>
            <Hand
              onPlayCard={() => alert("hello")}
              cards={[
                {
                  id: "1",
                  text: "Everyone shipping Koswei and Tumelo for no reason.",
                },
                {
                  id: "2",
                  text:
                    "Xahel dressing Orion in a maid outfit and getting him to clean the kitchen.",
                },
                {
                  id: "3",
                  text: "Min maxing your sheet to have 10+ hit on lvl1",
                },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Your hand</h2>
            <Hand
              onPlayCard={() => alert("hello")}
              interactable
              cards={[
                {
                  id: "1",
                  text: "Everyone shipping Koswei and Tumelo for no reason.",
                },
                {
                  id: "2",
                  text:
                    "Xahel dressing Orion in a maid outfit and getting him to clean the kitchen.",
                },
                {
                  id: "3",
                  text: "Min maxing your sheet to have 10+ hit on lvl1",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
