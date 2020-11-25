import React from "react";
import * as S from "./Section.style";

function Section({ background, fullWidth, children }) {
  return (
    <>
      {fullWidth ? (
        <S.Section background={background}>{children}</S.Section>
      ) : (
        <S.Container background={background}>{children}</S.Container>
      )}
    </>
  );
}

export default Section;
