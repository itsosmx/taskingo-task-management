import React from "react";
import { SignInMethods } from "../../constants/enums";
import { RegisterAccount } from "../../services/firebase";
import { Button, Container, Form, Input, Services, Submit, Wrapper } from "./styled";

export default function Authentication() {
  return (
    <Container>
      <Wrapper>
        <Services>
          <Button onClick={() => RegisterAccount(SignInMethods.FACEBOOK)}>
            <i className="fa-brands fa-facebook-f"></i>
            <p>Continue with Facebook</p>
          </Button>
          <Button onClick={() => RegisterAccount(SignInMethods.GOOGLE)}>
            <i className="fa-brands fa-google"></i>
            <p>Continue with Google</p>
          </Button>
          <Button onClick={() => RegisterAccount(SignInMethods.GITHUB)}>
            <i className="fa-brands fa-github"></i>
            <p>Continue with Github</p>
          </Button>
          <Button onClick={() => RegisterAccount(SignInMethods.ANONYMOUS)}>
            <i className="fa-solid fa-question"></i>
            <p>Continue Anonymous</p>
          </Button>
        </Services>
        <span className="or">OR</span>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Submit>Register</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
}
