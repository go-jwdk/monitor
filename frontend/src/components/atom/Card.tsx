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

export const CardLabel = styled.h2({
  fontSize: "2rem",
  margin: 0,
  padding: "8px 0 32px 8px",
  lineHeight: 1,
});

export const View = ({ children }: Props) => {
  return <Card>{children}</Card>;
};
