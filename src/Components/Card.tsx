import React from "react";

import BootstrapCard from "react-bootstrap/Card";
import styled from "styled-components";

import theme from "../utils/theme";

const StyledBootstrapCard = styled(BootstrapCard)`
  width: 12em;
  height: 14em;
  float: unset;
  margin: 0 auto;

  ${({ selected }) => selected && `border-color: ${theme.primary};`}

  p {
    text-align: left;
  }
`;

export interface CardInterface {
  id: string;
  text: string;
}

export interface CardPropsInterface extends CardInterface {
  tabIndex?: number;
  selected?: boolean;
  onClick?: (card: CardInterface) => void;
}

const Card = ({
  id,
  text,
  onClick,
  selected,
  tabIndex,
}: CardPropsInterface) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13 && onClick) {
      onClick({ id, text });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick({ id, text });
    }
  };

  return (
    <StyledBootstrapCard
      selected={selected}
      tabIndex={tabIndex}
      body
      onClick={handleClick}
      onKeyUp={handleKeyUp}
    >
      <p>{text}</p>
    </StyledBootstrapCard>
  );
};

export default Card;
