import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <Container className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

const Container = styled.div`
  .spinner {
    width: 44.8px;
    height: 44.8px;
    animation: spinner-y0fdc1 2s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: rgba(71, 75, 255, 0.2);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2.2px solid #474bff;
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-22.4px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(22.4px);
  }

  @keyframes spinner-y0fdc1 {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
`;
