import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: calc(50% - 1em);
  margin: 1em;
  &:nth-child(odd) {
    margin-left: 0;
  }
  &:nth-child(even) {
    margin-right: 0;
  }
  padding: 1em;
  border-radius: 2em;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(239, 232, 222, 0.6);
`;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100px;
  height: 100px;
`;

export const Title = styled.h3`
  margin: 0;
`;
export const Author = styled.h3`
  font-size: 0.9em;
`;

export const Book = styled.div`
  padding: 0 2em;
`;
