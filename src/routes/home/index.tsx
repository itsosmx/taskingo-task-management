import React from "react";
import { Navbar, Sidebar } from "../../components";
import { Container, Wrapper } from "./styled";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}
