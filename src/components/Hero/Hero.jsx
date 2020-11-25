import React from "react";
import * as S from "./Hero.style";

function Hero({ title }) {
  return (
    <S.Hero>
      <S.Title>{title}</S.Title>
    </S.Hero>
  );
}

export default Hero;
