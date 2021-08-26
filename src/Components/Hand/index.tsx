import React, { useState, useEffect } from "react";

import { tabletMaxViewport } from "../../utils/constants";

import { CardInterface } from "../card";

import MobileHand from "./mobile";
import DesktopHand from "./desktop";

export type HandProps = {
  cards: CardInterface[];
  interactable?: boolean;
  onPlayCard: (card: CardInterface) => void;
};

const Hand = (props: HandProps) => {
  const [mobileMQuery, setMobileMQuery] = useState<any>({
    matches: window.innerWidth < tabletMaxViewport ? true : false,
  });

  useEffect(() => {
    let mobileMediaQuery = window.matchMedia(
      `(max-width: ${tabletMaxViewport}px)`
    );
    mobileMediaQuery.addEventListener("change", setMobileMQuery);

    return () =>
      mobileMediaQuery.removeEventListener("change", setMobileMQuery);
  }, []);

  return (
    <>
      {mobileMQuery && mobileMQuery.matches ? (
        <MobileHand {...props} />
      ) : (
        <DesktopHand {...props} />
      )}
    </>
  );
};

export default Hand;
