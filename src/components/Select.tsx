import React from "react";
import styled from "styled-components";

interface TextAreaProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ref?: any;
  label?: string;
}

export default function TextArea({ ref, label, ...props }: TextAreaProps) {
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
  align-items: flex-start;

  p {
    font-weight: bold;
    font-size: 0.9em;
    margin: 0 0.2rem;
  }
`;
const Input = styled.select`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.lightPrimary};

  option {
    padding: 0.5rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    font-size: 0.9rem;
  }
`;
