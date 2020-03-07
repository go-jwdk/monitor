import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Nav = styled.div({
  background: "#fff"
});

const Link = styled.ul({
  listStyle: "none"
});

const LinkItem = styled.li({
  margin: 0,
  padding: "8px 16px"
});

export const View = () => {
  return (
    <Nav>
      <Link>
        <LinkItem></LinkItem>
      </Link>
    </Nav>
  );
};
