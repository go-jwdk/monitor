import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Select from "../atom/Select";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Header = styled.div({
  gridArea: "Header",
  display: "flex",
  // background: "#fcfcfc",
  borderBottom: "1px solid #e9e9e9",
  alignItems: "center",
  padding: 8,
  zIndex: 1
});

export const View = props => {
  return <Header>{props.children}</Header>;
};
