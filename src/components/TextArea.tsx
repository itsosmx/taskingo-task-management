import React from "react";
import styled from "styled-components";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: any;
  label?: string;
}

export default function TextArea({ ref, label, ...props }: TextAreaProps) {
  return (
    <Container>
      <p>{label}</p>
      <Input ref={ref} {...props} />
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
const Input = styled.textarea`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.lightPrimary};
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  outline: none;
  width: 100%;
`;
