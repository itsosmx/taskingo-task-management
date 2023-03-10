import React from "react";
import { Navbar, Sidebar } from "../../components";
import { Container, Wrapper, Body } from "./styled";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Body>
          sad
        </Body>
      </Wrapper>
    </Container>
  );
}
