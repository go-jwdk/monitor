import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import * as Nav from "./components/organisms/Nav";
import * as Header from "./components/organisms/Header";
import * as Content from "./components/organisms/Content";

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
      <Nav.View />
      <Header.View />
      <Content.View />
    </Layout>
  );
};

export default View;
