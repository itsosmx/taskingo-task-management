import React from "react";
import styled from "styled-components";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ref?: any;
  label?: string;
}

export default function Select({ ref, label, ...props }: SelectProps) {
  return (
    <Container>
      <p>{label}</p>
      <Input ref={ref} {...props}>
        {props.children}
      </Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;

  p {
    font-weight: bold;
    font-size: 0.9em;
    margin: 0 0.2rem;
  }
`;
const Input = styled.select`
  all: unset;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.primary};
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.lightPrimary};
  font-weight: bold;

  option {
    padding: 0.5rem;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    font-size: 0.9rem;
  }
`;
