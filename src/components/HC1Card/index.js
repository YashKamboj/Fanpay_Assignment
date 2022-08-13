import React, { useEffect, useState } from "react";
import { HC1CardWrapper, HC1CardsWrapper } from "./HC1Card.style";

const HC1Card = ({ name, title, url, imageUrl, isScrollable, bg_color }) => (
  <HC1CardWrapper href={url} style={{ backgroundColor: { bg_color } }}>
    <div
      className={
        isScrollable ? "HC1CardNoArrow" : "HC1CardNoArrow nonScrollable"
      }
    >
      <img src={imageUrl} />
      <div>
        <b>{title}</b>
        <p>{name}</p>
      </div>
    </div>
  </HC1CardWrapper>
);

const DisplayHC1Cards = ({ data }) => {
  const [scrollable, setScrollable] = useState();
  const [nonScrollable, setNonScrollable] = useState();

  useEffect(() => {
    setScrollable(data?.scrollable);
    setNonScrollable(data?.nonScrollable);
    console.log(data);
  }, [data]);

  return (
    <HC1CardsWrapper>
      <div className="NoArrowScrollable HC1Cards">
        {scrollable === undefined
          ? null
          : scrollable.map(
              ({
                title,
                formatted_title: { text: formattedTitle },
                name,
                url,
                icon: { image_url: imageUrl },
              }) => (
                <HC1Card
                  key={name}
                  name={name}
                  title={formattedTitle || title}
                  imageUrl={imageUrl}
                  url={url}
                  isScrollable
                  bg_color={data.bg_color}
                />
              )
            )}
      </div>
      <div className="HC1Cards">
        {nonScrollable === undefined
          ? null
          : nonScrollable.map(
              ({
                title,
                formatted_title: { text: formattedTitle },
                name,
                url,
                icon: { image_url: imageUrl },
              }) => (
                <HC1Card
                  key={name}
                  name={name}
                  title={formattedTitle || title}
                  imageUrl={imageUrl}
                  url={url}
                  isScrollable={false}
                  bg_color={data.bg_color}
                />
              )
            )}
      </div>
    </HC1CardsWrapper>
  );
};

export default DisplayHC1Cards;
