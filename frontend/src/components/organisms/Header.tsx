import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Select from "../atom/Select";

const Header = styled.div({
  gridArea: "Header",
  display: "flex",
  // display: "grid",
  // gridTemplateColumns: "1fr 100px",
  background: "#fff",
  alignItems: "center",
  padding: 8
});

export const View = () => {
  return (
    <Header>
      <Select.View styles={{ marginLeft: "auto" }} />
    </Header>
  );
};
