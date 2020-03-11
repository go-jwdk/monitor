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
  useParams,
  withRouter
} from "react-router-dom";
import * as Logo from "../molecules/Logo";
import * as Icon from "../atom/Icon";

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

const LinkItem = styled.a({
  display: "flex",
  alignItems: "center",
  padding: "14px 16px",
  color: "#666",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    background: "#f9f9f9"
  }
});

const Label = styled.span({
  display: "block",
  marginLeft: 8
});

const View = props => {
  const goto = path => {
    props.history.push(path);
  };
  return (
    <Nav>
      <Logo.View onClick={() => goto("/")} />
      <Ul>
        <Li>
          <LinkItem onClick={() => goto("/")}>
            <Icon.PieChart />
            <Label>DashBoard</Label>
          </LinkItem>
        </Li>
        <Li>
          <LinkItem onClick={() => goto("/settings")}>
            <Icon.Settings />
            <Label>Settings</Label>
          </LinkItem>
        </Li>
      </Ul>
    </Nav>
  );
};

export default withRouter(View);
