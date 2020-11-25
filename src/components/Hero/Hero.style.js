import styled from "styled-components";
import BackgroundImg from "../../assets/background.jpg";

export const Hero = styled.section`
  background-image: linear-gradient(
      90deg,
      rgba(233, 217, 191, 0.5) 17%,
      rgba(235, 228, 224, 0.5) 75%
    ),
    url(${BackgroundImg});
  background-size: cover;
  background-position-y: 30%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #222;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3em;
`;
