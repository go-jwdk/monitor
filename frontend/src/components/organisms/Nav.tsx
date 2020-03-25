import React, { useRef, useEffect } from "react";
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
  // background: "#fff"
  background: "#525aa7"
});

const Ul = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0
});

const Li = styled.li({
  margin: 0,
  lineHeight: 1,
  fontSize: "1.4rem"
});

const LinkItem = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  padding: "14px 16px",
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
  opacity: 0.6,
  "&:hover": {
    // background: "#f9f9f9"
    opacity: 1
  }
});

const Label = styled.span({
  display: "block",
  marginLeft: 8
});

const View = props => {
  // const goto = path => {
  //   props.history.push(path);
  // };

  // const NavRef = useRef(null);
  // useEffect(() => {
  //   console.log(NavRef.current.offsetWidth)
  // }, [props]);
  return (
    <Nav
    // ref={NavRef}
    >
      <Logo.View {...props} />
      <Ul>
        <Li>
          <LinkItem
            exact
            to="/"
            activeStyle={{
              opacity: 1
            }}
          >
            <Icon.PieChart />
            {props.toggleNav.flag ? <Label>DashBoard</Label> : null}
          </LinkItem>
        </Li>
        <Li>
          <LinkItem
            to="/settings"
            activeStyle={{
              opacity: 1
            }}
          >
            <Icon.Settings />
            {props.toggleNav.flag ? <Label>Settings</Label> : null}
          </LinkItem>
        </Li>
      </Ul>
    </Nav>
  );
};

export default withRouter(View);
