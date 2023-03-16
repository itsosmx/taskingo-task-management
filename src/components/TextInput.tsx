import React from "react";
import styled from "styled-components";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: any;
}

export default function TextInput({ ref, ...props }: TextInputProps) {
  return <Container ref={ref} {...props} />;
}

const Container = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.lightPrimary};
  padding: 1rem 3rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.text};
  outline: none;
`;
