import React from "react";
import { Section, Hero, Card } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <Section fullWidth>
      <Hero title="Online Book Club" />
      <S.Block>
        <S.Title>This is your book list</S.Title>
        <Card
          allBooks={[
            { id: 1, title: "Test", author: "Testinis" },
            { id: 2, title: "Test", author: "Testinis" },
            { id: 3, title: "Test", author: "Testinis" },
          ]}
        />
      </S.Block>
    </Section>
  );
}

export default Home;
