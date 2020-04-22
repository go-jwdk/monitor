import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import * as Card from "../atom/Card";
import * as Chart from "../molecules/Chart";
import * as GlobalStyle from "../../core/globalStyle";
import * as Select from "../atom/Select";
import * as Header from "../organisms/Header";
import * as Table from "../atom/Table";
import { Context } from "../../app";

const Content = styled.div(GlobalStyle.Contents, {
  gridArea: "Content",
});

export const View = () => {
  const intervalInit = 0;
  const [intervalState, setIntervalState] = useState(intervalInit);
  const data = [
    { value: intervalInit, label: "OFF" },
    { value: 1, label: "1s" },
    { value: 5, label: "5s" },
    { value: 10, label: "10s" },
    { value: 30, label: "30s" },
    { value: 60, label: "1m" },
    { value: 120, label: "2m" },
    { value: 300, label: "5m" },
    { value: 600, label: "10m" },
    { value: 1800, label: "30m" },
    { value: 3600, label: "1h" },
    { value: 86400, label: "1d" },
  ];
  return (
    <Context.Consumer>
      {(value) => (
        <>
          {console.log("value:", value)}
          <Header.View>
            <Select.View
              styles={{ marginLeft: "auto" }}
              data={data}
              defaultValue={intervalInit}
              onChange={(e) => setIntervalState(e.currentTarget.value)}
            />
          </Header.View>
          <Content>
            <Card.View>
              <Chart.RenderLineChart intervalState={intervalState} />
            </Card.View>
            <Table.Table width="100%">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Queues</Table.Th>
                  <Table.Th>Contents</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {value.queues?.map((i, index) => {
                  return (
                    <Table.Tr key={index}>
                      <Table.Td>{i.name}</Table.Td>
                      <Table.Td>{i.raw_name}</Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table.Table>

            <Card.View>
              <Chart.RenderLineChart intervalState={intervalState} />
            </Card.View>
            <Table.Table width="100%">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Queues</Table.Th>
                  <Table.Th>Contents</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>A</Table.Td>
                  <Table.Td>name:aaaa</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>B</Table.Td>
                  <Table.Td>name:bbb</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>C</Table.Td>
                  <Table.Td>name:ccc</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table.Table>
          </Content>
        </>
      )}
    </Context.Consumer>
  );
};

export const Head = () => {
  return <>Dashboard</>;
};
