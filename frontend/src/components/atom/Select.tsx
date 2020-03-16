import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Select = styled.select({});
const Option = styled.option({});

export const View = props => {
  return (
    <Select style={props.styles}>
      {props.data.map((i, index) => {
        return (
          <Option key={index} value={i.value}>
            {i.label}
          </Option>
        );
      })}
    </Select>
  );
};
