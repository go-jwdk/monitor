import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

export const Table = styled.table({}, (props: { width: string | number }) => ({
  width: props.width
}));

export const Tbody = styled.tbody({});

export const Thead = styled.thead({});

export const Tfoot = styled.tfoot({});

export const Tr = styled.tr({
  fontSize: "1.4rem"
});

export const Th = styled.th({
  fontWeight: 600,
  textAlign: "left",
  borderBottom: "1px solid #e1e1e1",
  padding: "8px 40px"
});

export const Td = styled.td({
  fontWeight: 400,
  padding: "8px 40px"
});
