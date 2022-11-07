import React from "react";
import Logo from "./components/layout/sidebar/Logo";
import Navigation from "./components/layout/sidebar/Navigation";
import styled from "styled-components";

const GridLeft = styled.div`
text-align: center;
width: auto;
`;

export default function Sidebar() {
  return (
    <GridLeft>
      <Logo />
      <Navigation />
    </GridLeft>
  );
}
