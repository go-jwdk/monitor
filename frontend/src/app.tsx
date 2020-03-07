import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import * as Nav from "./components/molecules/Nav";

const View = () => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }

          body {
            font-size: 62.5%;
            background: #f0f0f0;
          }
        `}
      />
      <Nav.View />
    </>
  );
};

export default View;
