import styled from "styled-components";

export const LayoutWrapper = styled.div`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: #ffffff
    color: "#000"
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;
  width: 100%;

  .refresh-block {
    position: relative;
  }

.NavContainer {
  display: flex;
  justify-content: center;
  position: sticky;
  padding: 4rem;
}

.Content {
  display: flex;
  flex-direction: column;
  background-color: #f7f6f3;
  min-height: 100vh;
  border-radius: 12px 12px 0px 0px;
  width: 100%;
  perspective: 1px;
  position: relative;
  padding: 1rem;
  overflow-x: hidden;
  z-index: 2;
}
`;
