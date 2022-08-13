import React, { useEffect, useRef, useState } from "react";
import { HC3CardWrapper } from "./HC3Cards.style";
import bell from "../../assets/images/bell.png";
import cancel from "../../assets/images/cancel.png";

const HC3Card = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data?.[0].cards);
  }, [data]);

  var local = localStorage.getItem("checked");

  var check = false;
  if (local !== null) {
    check = local;
  }

  const handleRemindLater = () => {
    check = false;
    localStorage.setItem("checked", false);
    setCards(undefined);
  };

  const handleDissmissNow = () => {
    check = true;
    localStorage.setItem("checked", true);
    setCards(undefined);
  };

  const contentBox = useRef(null);
  const buttonRemind = useRef(null);
  const buttonDismiss = useRef(null);

  return (
    <>
      {cards === undefined
        ? null
        : cards.map(({ title, description, cta }) => {
            const handleClick = () => {
              contentBox.current.classList.toggle("moveToRight");
              buttonRemind.current.classList.toggle("showButtons");
              buttonDismiss.current.classList.toggle("showButtons");
            };

            const entitiesTitle =
              data?.[0].cards?.[0].formatted_title.text.replace(
                "{}",
                data?.[0].cards?.[0].formatted_title.entities?.[0].text
              );
            const formattedTitle = entitiesTitle.replace(
              "{}",
              data?.[0].cards?.[0].formatted_title.entities?.[1].text
            );

            return (
              <>
                {cards === undefined ? null : (
                  <HC3CardWrapper>
                    <div className="HC3CardButtonContainer">
                      <div
                        role="button"
                        onClick={handleRemindLater}
                        ref={buttonRemind}
                      >
                        <img src={bell} />
                        <p>Remind</p>
                        <p>Later</p>
                      </div>

                      <div
                        role="button"
                        onClick={handleDissmissNow}
                        ref={buttonDismiss}
                      >
                        <img src={cancel} />
                        <p>Dismiss</p>
                        <p>Now</p>
                      </div>
                    </div>

                    <div
                      className="HC3CardContent"
                      tabIndex="0"
                      role="button"
                      onClick={handleClick}
                      ref={contentBox}
                    >
                      <h2>{formattedTitle || title}</h2>
                      <p>
                        {data?.[0].cards?.[0].formatted_description.text ||
                          description}
                      </p>
                      <a href={cta.url}>
                        <button
                          style={{
                            backgroundColor: cta?.[0].bg_color,
                            color: cta?.[0].text_color,
                          }}
                        >
                          {cta?.[0].text}
                        </button>
                      </a>
                    </div>
                  </HC3CardWrapper>
                )}
              </>
            );
          })}
    </>
  );
};

export default HC3Card;
