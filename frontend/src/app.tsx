import React, { useState } from "react";
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
import Nav from "./components/organisms/Nav";
import * as Header from "./components/organisms/Header";
import * as Content from "./components/organisms/Settings";
import * as Dashboard from "./components/organisms/Dashboard";

const Layout = styled.div(
  {
    display: "grid",
    // gridTemplateColumns: "150px 1fr",
    gridTemplateRows: "50px 1fr",
    gridTemplateAreas: `
  "Nav Header"
  "Nav Content"
  `,
    height: "100%"
  },
  (props: { navWidth: boolean }) => ({
    gridTemplateColumns: props.navWidth ? "150px 1fr" : "50px 1fr"
  })
);

const View = () => {
  const [state, setState] = useState(true);
  const toggleNav = () => {
    setState(!state);
  };

  return (
    <Layout navWidth={state}>
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
        <Nav onClickToggle={toggleNav} toggleNav={state} />
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
