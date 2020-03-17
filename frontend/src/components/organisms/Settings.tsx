import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as GlobalStyle from "../../core/globalStyle";

const Header = styled.div(GlobalStyle.Header, {});

const Content = styled.div(GlobalStyle.Contents, {
  gridArea: "Content"
});

export const View = () => {
  return (
    <>
      <Header></Header>
      <Content>settings</Content>
    </>
  );
};
