import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Content = styled.div({
  gridArea: "Content",
  padding: 8
});

export const View = () => {
  return <Content>contents</Content>;
};
