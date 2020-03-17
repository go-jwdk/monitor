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
  background: "#fff",
  alignItems: "center",
  padding: 8,
  zIndex: 1
});

export const View = () => {
  const data = [
    { value: 5, label: "5s" },
    { value: 10, label: "10s" },
    { value: 30, label: "30s" },
    { value: 60, label: "1m" },
    { value: 120, label: "2m" },
    { value: 300, label: "5m" },
    { value: 600, label: "10m" },
    { value: 1800, label: "30m" },
    { value: 3600, label: "1h" },
    { value: 86400, label: "1d" }
  ];
  return (
    <Header>
      <Select.View styles={{ marginLeft: "auto" }} data={data} />
    </Header>
  );
};
