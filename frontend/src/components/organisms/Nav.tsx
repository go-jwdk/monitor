import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Logo from "../molecules/Logo";

const Nav = styled.div({
  gridArea: "Nav",
  background: "#fff"
});

const Ul = styled.ul({
  listStyle: "none",
  margin: "24px 0 0",
  padding: 0
});

const Li = styled.li({
  margin: 0,
  lineHeight: 1,
  fontSize: "1.4rem"
});

const Link = styled.a({
  display: "block",
  padding: "14px 16px",
  color: "#666",
  textDecoration: "none",
  "&:hover": {
    background: "#f9f9f9"
  }
});

export const View = () => {
  return (
    <Nav>
      <Logo.View />
      <Ul>
        <Li>
          <Link href="#">DashBoard</Link>
        </Li>
        <Li>
          <Link href="#">Settings</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
