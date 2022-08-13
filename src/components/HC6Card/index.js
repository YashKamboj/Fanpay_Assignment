import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HC6CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 1rem;
    margin: 1rem;
    border-radius: 10px;
    text-decoration: none;

  div{
    display: flex;
    align-items: center;
    img{
      height: 30px;
    }
    p{
      margin-left: 10px;
    }
  }
  a{
    text-decoration: none;
    color: black
    cursor : pointor
  }
`;

const HC6Card = ({ data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(data?.[0].cards);
    console.log(data?.[0].cards?.[0].icon.image_url)
  }, [data]);
  return (
    <div>
      {cards === undefined ? (
        null
      ) : (
        cards.map(({ url }) => {
          
          const Text = data?.[0].cards?.[0].formatted_title.text.split("{}");
          const bgcolor = cards?.[0].formatted_title.entities?.[0].color 
          
          return(
            <HC6CardWrapper>
            <div>
              <img src={data?.[0].cards?.[0].icon.image_url} />
              {Text} <p style={{color: bgcolor }}>{cards?.[0].formatted_title.entities?.[0].text}</p>
            </div>
            <h3>
              <a href={url}>
                {">"}
              </a>
            </h3>
          </HC6CardWrapper>
          )})
      )}
    </div>
  );
};

export default HC6Card;
