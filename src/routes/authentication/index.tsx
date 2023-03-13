import React from "react";
import { Background, Button, Container, Form, Input, Services, Submit, Wrapper } from "./styled";
//@ts-ignore
import ToDoListSVG from "../../assets/todolist.svg";

export default function Authentication() {
  return (
    <Container>
      {/* <Background src={ToDoListSVG} alt="" /> */}
      <Wrapper>
        <Services>
          <Button>
            <i className="fa-brands fa-facebook-f"></i>
            <p>Continue with Facebook</p>
          </Button>
          <Button>
            <i className="fa-brands fa-google"></i>
            <p>Continue with Google</p>
          </Button>
          <Button>
            <i className="fa-brands fa-github"></i>
            <p>Continue with Github</p>
          </Button>
          <Button>
            <i className="fa-solid fa-question"></i>
            <p>Continue Anonymous</p>
          </Button>
        </Services>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Submit>Register</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
}
