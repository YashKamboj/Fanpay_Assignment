import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HC9CardWrapper = styled.div`
  display: flex;
  overflow: auto;

  img {
    margin: 1rem;
  }
`;

const HC9Card = ({ data }) => {
  const [height, setHeight] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(data?.[0].cards);
    setHeight(data?.[0].height);
  }, [data]);

  return (
    <HC9CardWrapper>
      {cards === undefined
        ? null
        : cards.map(({ url, bg_image: { image_url: imageUrl } }) => (
            <a href={url}>
              <img
                className="HC9CardImage"
                src={imageUrl}
                style={{ height: `${height}px` }}
              />
            </a>
          ))}
    </HC9CardWrapper>
  );
};

export default HC9Card;
