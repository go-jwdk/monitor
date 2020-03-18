import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as GlobalStyle from "../../core/globalStyle";
import * as Header from "../organisms/Header";

const Content = styled.div(GlobalStyle.Contents, {
  gridArea: "Content"
});

export const View = () => {
  return (
    <>
      <Header.View></Header.View>
      <Content>settings</Content>
    </>
  );
};
