import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as GlobalStyle from "../../core/globalStyle";

const Content = styled.div(GlobalStyle, {
  gridArea: "Content"
});

export const View = () => {
  return <Content>settings</Content>;
};
