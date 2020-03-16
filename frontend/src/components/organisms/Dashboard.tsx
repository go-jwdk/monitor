import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Card from "../atom/Card";
import * as Chart from "../molecules/Chart";
import * as GlobalStyle from "../../core/globalStyle";

const Content = styled.div(GlobalStyle.Contents, {
  gridArea: "Content"
});

export const View = () => {
  return (
    <Content>
      <Card.View>
        <Chart.RenderLineChart />
      </Card.View>
    </Content>
  );
};
