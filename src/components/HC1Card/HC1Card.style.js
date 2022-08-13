import styled from "styled-components";

export const HC1CardWrapper = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointor;

  .HC1CardNoArrow {
    display: flex;
    align-items: center;
    margin: 0 1rem 0 0;
    background-color: #fbaf03;
    border-radius: 12px;
    width: 70vw;

    div {
      display: flex;
      flex-direction: column;

      b {
        padding: 1rem 0 0 1.2rem;
        font-size: 1rem;
      }
      p {
        padding: 0px 1rem 1rem 1rem;
        margin: 0 0 0 0.3rem;
        font-size: 0.8rem;
        color: rgba(27, 27, 30, 0.725524);
      }
    }
    img {
      padding-left: 1rem;
      height: 2rem;
    }
  }
  .nonScrollable {
    width: 100%;
  }
`;

export const HC1CardsWrapper = styled.div`
  .HC1Cards {
    display: flex;
    padding: 1rem;
    gap: 1rem;
  }
  .NoArrowScrollable {
    overflow: auto;
  }
`;
