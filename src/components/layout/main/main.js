import React from "react";
import BlockData from "./block/BlockData";
import styled from "styled-components";

export default function Main() {
  return (
    <Section>
      <BlockData />
      <BlockData />
      <BlockData />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 30px;
  padding: 50px;
`;
