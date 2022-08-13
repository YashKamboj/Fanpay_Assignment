import styled from "styled-components";

export const HC3CardWrapper = styled.div`
  background-color: white;
  margin: 1rem;
  border-radius: 12px;
  height: 15rem;

  .HC3CardButtonContainer {
    position: absolute;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 120px;
      background-color: #f7f6f3;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      z-index: 0;
      opacity: 0;
      img {
        height: "20px";
      }
      p {
        margin: 0;
      }
    }

    .showButtons {
      opacity: 1;
    }
  }

  .HC3CardContent {
    padding: 20px;
    border-radius: 12px;
    background-color: rgba(69, 74, 166, 0.9);
    height: inherit;
    position: relative;
    transition: left 1s;
    cursor: pointer;

    button {
      cursor: pointer;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
    }
  }

  .moveToRight {
    left: 180px;
    transition: none;
  }
`;
