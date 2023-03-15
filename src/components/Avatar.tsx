import React, { PropsWithChildren } from "react";
import styled from "styled-components";
//@ts-ignore
import _avatar from "../assets/avatar.jpg";

interface AvatarProps extends PropsWithChildren {
  src: string | null;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return (
    <Container {...props}>
      <img src={src ? src : _avatar} alt="avatar" />
    </Container>
  );
}

const Container = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
