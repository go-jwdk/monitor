import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { format, addMilliseconds } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import * as Mock from "../../mock/chart";
import { ContextW } from "../../app";

export const RenderLineChart = props => {
  const Interval = props.intervalState;
  const Number = 20;
  const [minState, setMinState] = useState(Interval);
  const [dataState, setDataState] = useState({});

  const refData = useRef(dataState);
  useEffect(() => {
    if (Interval > 0) {
      setMinState(Interval);
      const interval = setInterval(() => {
        setDataState(Mock.UpdateLogDate(refData.current, Number));
      }, Interval * 1000);

      return () => clearInterval(interval);
    }
  }, [Interval]);

  useEffect(() => {
    refData.current = dataState;
  }, [dataState]);

  useEffect(() => {
    setDataState(Mock.LogDate(minState, Number));
  }, []);

  // data = {
  //   name: "hogehoge",
  //   uv: 0000,
  //   pv: 0000,
  //   amt: 0000
  // }

  return (
    <ContextW.Consumer>
      {value => (
        <LineChart
          width={value.width - value.navWidth - 8 * 2 * 2}
          height={300}
          data={dataState}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="que1"
            stroke="#8884d8"
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="que2"
            stroke="#82ca9d"
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="que3"
            stroke="#f56525"
            isAnimationActive={false}
          />
        </LineChart>
      )}
    </ContextW.Consumer>
  );
};
