import React from "react";
import { Link } from "react-router-dom";
import { SignInMethods } from "../../constants/enums";
import { RegisterAccount } from "../../services/firebase";
import { Button, Container, Services, Terms, Title, Wrapper } from "./styled";

export default function Authentication() {
  return (
    <Container>
      <Wrapper>
        <Title>To continue, log in to Taskingo.</Title>
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
        <Terms>
          <p>
            By clicking on sign-up, you agree to Taskingo{" "}
            <Link to="/end-user-agreement">Terms and Conditions of Use.</Link>
          </p>
          <p>
            To learn more about how Taskingo collects, uses, shares and protects your personal data, please see
            Taskingo's <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </Terms>
      </Wrapper>
    </Container>
  );
}
