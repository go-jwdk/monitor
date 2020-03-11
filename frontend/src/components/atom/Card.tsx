import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

interface Props {
  children: any;
}

const Card = styled.div({
  background: "#fff",
  padding: 8,
  display: "inline-block"
});

export const View = ({ children }: Props) => {
  return <Card>{children}</Card>;
};
