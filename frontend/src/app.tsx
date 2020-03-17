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
import { motion } from "framer-motion";
import Nav from "./components/organisms/Nav";
import * as Header from "./components/organisms/Header";
import * as Content from "./components/organisms/Settings";
import * as Dashboard from "./components/organisms/Dashboard";

const Layout = styled(motion.div)({
  display: "grid",
  gridTemplateRows: "50px 1fr",
  gridTemplateColumns: "150px 1fr",
  gridTemplateAreas: `
  "Nav Header"
  "Nav Content"
  `,
  height: "100%"
});

const View = () => {
  const [state, setState] = useState(true);
  const toggleNav = () => {
    setState(!state);
  };

  const variants = {
    expand: { gridTemplateColumns: "150px 1fr" },
    fold: { gridTemplateColumns: "50px 1fr" }
  };

  return (
    <Layout
      // navWidth={state}
      animate={state ? "expand" : "fold"}
      variants={variants}
    >
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
            background: #f4f4f4;
          }
          #app {
            height: 100%;
          }
        `}
      />
      <Router>
        <Nav onClickToggle={toggleNav} toggleNav={state} />
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
