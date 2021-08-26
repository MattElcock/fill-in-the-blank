import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const JoinGame = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Fill in the blank</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Game code</Form.Label>
              <br />
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <br />
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Join game
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinGame;
