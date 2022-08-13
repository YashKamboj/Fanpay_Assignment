import React from "react";
import { LayoutWrapper } from "./Layout.style";
import fampaylogo from "../assets/images/fampaylogo.svg";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div className="NavContainer">
      <img src={fampaylogo} />
      </div>
      <div className="Content">{children}</div>
    </LayoutWrapper>
  );
};
export default Layout;
