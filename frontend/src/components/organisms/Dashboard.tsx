import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import * as Card from "../atom/Card";
import * as Chart from "../molecules/Chart";

const Content = styled.div({
  gridArea: "Content",
  padding: 8
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
