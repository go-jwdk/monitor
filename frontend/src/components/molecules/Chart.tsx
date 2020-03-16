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

export const RenderLineChart = () => {
  const Interval = 3;
  const [minState, setMinState] = useState(Interval);
  const [dataState, setDataState] = useState({});

  const refData = useRef(dataState);
  useEffect(() => {
    refData.current = dataState;
  }, [dataState]);
  useEffect(() => {
    setDataState(Mock.LogDate(minState));
    const interval = setInterval(() => {
      setDataState(Mock.UpdateLogDate(refData.current));
    }, Interval * 1000);

    return () => clearInterval(interval);
  }, []);

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100
  //   }
  // ];
  return (
    <LineChart width={500} height={300} data={dataState}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="que1"
        stroke="#8884d8"
        // activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="que2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="que3" stroke="#f56525" />
    </LineChart>
  );
};
