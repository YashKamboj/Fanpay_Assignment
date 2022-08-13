import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HC5CardsWrapper = styled.div`
display: flex;
overflow: auto;
margin: 1rem;

img{
background-size: 20rem;
height: 12rem;
background-repeat: no-repeat;
margin: 0 1rem;
border-radius: 15px;
}
`;


const HC5Card = ({ data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const allCards = [];
    data?.forEach((card) => {
      allCards.push(...card.cards);
    });
    setCards(allCards);
  }, [data]);

  return (
    <HC5CardsWrapper>
      {cards === undefined
        ? null
        : cards.map(({
          url,
          bg_image: { image_url: bgImageUrl },
        } ) => (
        <a href={url}>
          <img src={bgImageUrl} />
        </a>
          ))}
    </HC5CardsWrapper>
  );
};

export default HC5Card;