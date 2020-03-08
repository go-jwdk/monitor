import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
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

const LinkItem = {
  display: "block",
  padding: "14px 16px",
  color: "#666",
  textDecoration: "none",
  "&:hover": {
    background: "#f9f9f9"
  }
};

export const View = () => {
  return (
    <Router>
      <Nav>
        <Logo.View />
        <Ul>
          <Li>
            <NavLink style={LinkItem} to="/">
              DashBoard
            </NavLink>
          </Li>
          <Li>
            <NavLink style={LinkItem} to="/settings">
              Settings
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </Router>
  );
};
