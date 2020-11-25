import React from "react";
import * as S from "./Card.style";

function Card({ allBooks }) {
  return (
    <S.Container>
      {allBooks.map((book) => {
        return (
          <S.Card key={book.id}>
            <S.Image src="https://images.pexels.com/photos/776634/pexels-photo-776634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <S.Book>
              <S.Title>{book.title}</S.Title>
              <S.Author>{book.author}</S.Author>
            </S.Book>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

export default Card;
