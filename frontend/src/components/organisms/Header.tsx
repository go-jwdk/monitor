import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Select from "../atom/Select";

const Header = styled.div({
  gridArea: "Header",
  position: "sticky",
  top: "0",
  display: "flex",
  background: "#fff",
  alignItems: "center",
  padding: 8,
  zIndex: 1
});

export const View = () => {
  return (
    <Header>
      <Select.View styles={{ marginLeft: "auto" }} />
    </Header>
  );
};
