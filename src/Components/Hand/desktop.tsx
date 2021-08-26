import React, { useState } from "react";

import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { HandProps } from ".";

import Card, { CardInterface } from "../Card";

const ColCentered = styled(Col)`
  display: flex;
  justify-content: center;
`;

const CardGroup = styled.div`
  display: flex;
  margin-bottom: 2em;
  .card {
    margin-right: 0.5em;
  }
`;

const DesktopHand = ({ interactable, cards, onPlayCard }: HandProps) => {
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>(null);

  const handleCardClick = (card: CardInterface) => {
    if (interactable) {
      if (!selectedCard) {
        setSelectedCard(card);
      } else {
        setSelectedCard(null);
      }
    }
  };

  const handlePlayCard = () => {
    if (selectedCard) {
      onPlayCard(selectedCard);
      setSelectedCard(null);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            {cards.map((card) => (
              <Card
                key={card.id}
                onClick={handleCardClick}
                selected={selectedCard?.id === card.id}
                tabIndex={0}
                {...card}
              />
            ))}
          </CardGroup>
        </Col>
      </Row>
      {interactable && (
        <Row>
          <ColCentered>
            <Button disabled={!selectedCard} onClick={handlePlayCard}>
              Play card
            </Button>
          </ColCentered>
        </Row>
      )}
    </Container>
  );
};

export default DesktopHand;
