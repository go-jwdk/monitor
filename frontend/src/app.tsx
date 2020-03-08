import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import * as Nav from "./components/organisms/Nav";
import * as Logo from "./components/molecules/Logo";
import * as Header from "./components/organisms/Header";
import * as Content from "./components/organisms/Settings";
import * as Dashboard from "./components/organisms/Dashboard";

const Layout = styled.div({
  display: "grid",
  gridTemplateColumns: "150px 1fr",
  gridTemplateRows: "50px 1fr",
  gridTemplateAreas: `
  "Nav Header"
  "Nav Content"
  `,
  height: "100%"
});

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

const View = () => {
  return (
    <Layout>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

          html {
            font-size: 62.5%;
          }

          body {
            font-size: 100%;
            background: #f0f0f0;
          }
          #app {
            height: 100%;
          }
        `}
      />
      <Router>
        {/* <Nav.View /> */}
        <Nav>
          <Logo.View />
          <Ul>
            <Li>
              <Link style={LinkItem} to="/">
                DashBoard
              </Link>
            </Li>
            <Li>
              <Link style={LinkItem} to="/settings">
                Settings
              </Link>
            </Li>
          </Ul>
        </Nav>
        <Header.View />
        <Switch>
          <Route exact path="/">
            <Dashboard.View />
          </Route>
          <Route path="/settings">
            <Content.View />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default View;
