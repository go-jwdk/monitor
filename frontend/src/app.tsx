import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./components/organisms/Nav";
import * as Header from "./components/organisms/Header";
import * as Content from "./components/organisms/Settings";
import * as Dashboard from "./components/organisms/Dashboard";
import * as Queues from "./network/queues";

const Layout = styled(motion.div)({
  display: "grid",
  gridTemplateRows: "50px 1fr",
  gridTemplateColumns: "150px 1fr",
  gridTemplateAreas: `
  "Nav Header"
  "Nav Content"
  `,
  height: "100%",
});

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const useCurrentWitdh = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
};

export const Context = React.createContext(null);

const View = () => {
  let width = useCurrentWitdh();

  const [state, setState] = useState({ flag: true, width: 150 });
  const [stateQueues, setQueuesState] = useState();
  const toggleNav = () => {
    setState({ flag: !state.flag, width: !state.flag ? 150 : 50 });
  };

  const variants = {
    expand: { gridTemplateColumns: "150px 1fr" },
    fold: { gridTemplateColumns: "50px 1fr" },
  };

  const NavRef = useRef(null);
  useEffect(() => {
    // console.log(NavRef.current.offsetWidth);
  }, [NavRef]);

  useEffect(() => {
    Queues.getQueues().then((result) => setQueuesState(result));
  }, []);

  return (
    <Layout
      // navWidth={state}
      animate={state.flag ? "expand" : "fold"}
      variants={variants}
      ref={NavRef}
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
          }
          #app {
            height: 100%;
          }
        `}
      />
      <Context.Provider
        value={{ width: width, navWidth: state.width, queues: stateQueues }}
      >
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
      </Context.Provider>
    </Layout>
  );
};

export default View;
