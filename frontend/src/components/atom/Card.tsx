import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

interface Props {
  children: any;
}

const Card = styled.div({
  background: "#fff",
  padding: 16,
  borderRadius: 10,
});

export const View = ({ children }: Props) => {
  return <Card>{children}</Card>;
};
