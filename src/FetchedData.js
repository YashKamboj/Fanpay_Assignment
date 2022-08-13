const CARDS_TYPES = {
  HC1: "HC1",
  HC3: "HC3",
  HC5: "HC5",
  HC6: "HC6",
  HC9: "HC9",
};

const API_URL = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

const fetchData = async () => {
  const response = await fetch(API_URL);
  const jsonResponse = await response.json();
  return jsonResponse;
};

const FetchedData = async () => {
  const { card_groups: cardGroups } = await fetchData();
  const { HC1, HC3, HC5, HC6, HC9 } = CARDS_TYPES;

  const HC3Cards = cardGroups.filter((card) => card.design_type === HC3);
  const HC5Cards = cardGroups.filter((card) => card.design_type === HC5);
  const HC6Cards = cardGroups.filter((card) => card.design_type === HC6);
  const HC9Cards = cardGroups.filter((card) => card.design_type === HC9);

  const scrollableNoArrowCards = cardGroups.filter(
    (card) => card.design_type === HC1 && card["is_scrollable"] === true
  );
  const nonScrollableNoArrowCards = cardGroups.filter(
    (card) => card.design_type === HC1 && card["is_scrollable"] === false
  );
  const HC1Cards = {
    scrollable: scrollableNoArrowCards[0].cards,
    nonScrollable: nonScrollableNoArrowCards[0].cards,
  };

  return {
    HC3Cards,
    HC5Cards,
    HC1Cards,
    HC6Cards,
    HC9Cards,
  };
};

export default FetchedData;
