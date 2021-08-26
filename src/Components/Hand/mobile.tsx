import React, { useState } from "react";

import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapCarousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { HandProps } from ".";

import Card, { CardInterface } from "../card";
import { mobileMaxViewport, tabletMaxViewport } from "../../utils/constants";

const StyledBootstrapCarousel = styled(BootstrapCarousel)`
  margin-bottom: 3em;

  .carousel-indicators {
    bottom: -3em;
  }

  @media only screen and (max-width: ${tabletMaxViewport}px) {
    .carousel-control-next {
      right: 9em;
    }
    .carousel-control-prev {
      left: 9em;
    }
  }

  @media only screen and (max-width: ${mobileMaxViewport}px) {
    .carousel-control-next {
      right: 0;
    }
    .carousel-control-prev {
      left: 0;
    }
  }
`;

const ColCentered = styled(Col)`
  display: flex;
  justify-content: center;
`;

const MobileHand = ({ interactable, cards, onPlayCard }: HandProps) => {
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>(null);
  const [index, setIndex] = useState<number>(0);

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

  const handleCarouselMove = (selectedIndex: number) => {
    if (selectedCard) {
      setSelectedCard(null);
    }

    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col>
          <StyledBootstrapCarousel
            variant="dark"
            interval={null}
            activeIndex={index}
            onSelect={handleCarouselMove}
          >
            {cards.map((card) => (
              <BootstrapCarousel.Item>
                <Card
                  key={card.id}
                  onClick={handleCardClick}
                  selected={selectedCard?.id === card.id}
                  tabIndex={0}
                  {...card}
                />
              </BootstrapCarousel.Item>
            ))}
          </StyledBootstrapCarousel>
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

export default MobileHand;
