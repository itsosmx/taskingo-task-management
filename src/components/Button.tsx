import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: "primary" | "secondary" | string;
  labelColor?: "white" | "primary" | "secondary" | string;
}

export default function Button({ labelColor, background, ...props }: ButtonProps) {
  return (
    <Container labelColor={labelColor} background={background} {...props}>
      {props.children}
    </Container>
  );
}

const Container = styled.button<{ background?: string; labelColor?: string }>`
  background-color: ${(props) => props.theme[props.background || "secondary"]};
  color: ${(props) => props.theme[props.labelColor || "white"]};
  padding: 0.7rem;
  border-radius: 1rem;
  font-weight: bold;
  transition: 500ms;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
`;
