import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Card from "../atom/Card";
import * as Chart from "../molecules/Chart";
import * as GlobalStyle from "../../core/globalStyle";
import * as Select from "../atom/Select";
import * as Header from "../organisms/Header";

const Content = styled.div(GlobalStyle.Contents, {
  gridArea: "Content"
});

export const View = () => {
  const intervalInit = 5;
  const [intervalState, setIntervalState] = useState(intervalInit);
  const data = [
    { value: 0, label: "OFF" },
    { value: 1, label: "1s" },
    { value: intervalInit, label: "5s" },
    { value: 10, label: "10s" },
    { value: 30, label: "30s" },
    { value: 60, label: "1m" },
    { value: 120, label: "2m" },
    { value: 300, label: "5m" },
    { value: 600, label: "10m" },
    { value: 1800, label: "30m" },
    { value: 3600, label: "1h" },
    { value: 86400, label: "1d" }
  ];
  return (
    <>
      <Header.View>
        <Select.View
          styles={{ marginLeft: "auto" }}
          data={data}
          defaultValue={intervalInit}
          onChange={e => setIntervalState(e.currentTarget.value)}
        />
      </Header.View>
      <Content>
        <Card.View>
          <Chart.RenderLineChart intervalState={intervalState} />
        </Card.View>
      </Content>
    </>
  );
};

export const Head = () => {
  return <>Dashboard</>;
};
