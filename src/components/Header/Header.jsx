import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./Header.style";
import { Button } from "../../components";

function Header() {
  const history = useHistory();

  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoTitle to="/">
          Book
          <br />
          Club
        </S.LogoTitle>
        <S.Actions>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/add-book">Add book</S.StyledLink>

          <Button color="primary" handleClick={() => history.push("/")}>
            Register
          </Button>
          <Button color="primary" handleClick={() => history.push("/")}>
            Login
          </Button>
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
