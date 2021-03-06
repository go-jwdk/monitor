import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import * as Icon from "../atom/Icon";

interface Props {
  onClick: () => void;
}

const Head = styled.div({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  padding: 14,
  height: 50,
  color: "#fff"
});

const MenuIcon = styled.div({
  cursor: "pointer"
});

const Logo = styled.div({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  width: "100%",
  // color: "#30a5d5",
  color: "#fff",
  cursor: "pointer"
});

export const View = props => {
  return (
    <Head>
      <MenuIcon onClick={props.onClickToggle}>
        <Icon.Menu />
      </MenuIcon>
      {props.toggleNav.flag ? (
        <NavLink to="/">
          <Logo onClick={props.onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              // height="14.28mm"
              viewBox="0 0 214.41 40.47"
              fill="currentColor"
            >
              <defs></defs>
              <title>logo</title>
              <path d="M15.5,9.94c-.4,0-.5-.2-.3-.5l2.1-2.7a1.43,1.43,0,0,1,1.1-.5H54.1c.4,0,.5.3.3.6l-1.7,2.6a1.52,1.52,0,0,1-1,.6Z" />
              <path d="M.4,19.14c-.4,0-.5-.2-.3-.5l2.1-2.7a1.43,1.43,0,0,1,1.1-.5H48.9a.46.46,0,0,1,.5.6l-.8,2.4a.87.87,0,0,1-.9.6Z" />
              <path d="M24.6,28.34c-.4,0-.5-.3-.3-.6l1.4-2.5a1.33,1.33,0,0,1,1-.6h20c.4,0,.6.3.6.7l-.2,2.4a.75.75,0,0,1-.7.7Z" />
              <path d="M95.83,22C93.76,34.25,84.52,41.25,73.1,41.25c-12.27,0-19.43-9.47-17.53-20.94A23.48,23.48,0,0,1,78.81.48C86.71.48,92.36,4,95.22,9.89L87,14.2c-1.74-3.25-4.71-5-9.13-5-6.78,0-12.1,4.64-13.33,11.64S67,32.51,74,32.51c5.88,0,9.52-2.18,11.48-6H75.39l1.35-7.84H96.39Z" />
              <path d="M97.18,33.35l8.23-4.48c.73,2.58,2.18,3.64,5.1,3.64,4.2,0,5.65-2.24,6.1-4.65l4.7-26.59h9l-4.7,26.59C124,37.05,118,41.25,109.72,41.25,103.17,41.25,99.14,38.62,97.18,33.35Z" />
              <path d="M164.32,20.53l10.92,19.93H166L155.75,21.82,152.5,40.46h-8.95l6.88-39.19h9l-2.91,16.4,15.06-16.4h10.59Z" />
              <path d="M183.25,12.46h8.4l-4.93,28h-8.4Zm.5-7.5a6.21,6.21,0,0,1,5.83-5,4.21,4.21,0,0,1,4.25,5A6.15,6.15,0,0,1,188,10,4.17,4.17,0,0,1,183.75,5Z" />
              <path d="M205.31,30.44c-.45,2.52,1.63,2.69,5.38,2.41l-1.35,7.61c-10.08,1.12-13.83-2.18-12.43-10l1.74-9.91h-4.48l1.45-8.07h4.43L201,7.14l8.85-2.52-1.4,7.84h5.82l-1.45,8.07h-5.77Z" />
            </svg>
          </Logo>
        </NavLink>
      ) : null}
    </Head>
  );
};
