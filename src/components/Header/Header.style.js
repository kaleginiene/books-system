import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid #534d4a;
`;
export const Wrapper = styled.div`
  width: 56em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
export const LogoTitle = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
  color: #222;
  text-decoration: none;
  margin-top: -8px;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  font-weight: bold;
  color: #222;
  text-decoration: none;
  transition: color ease-in 0.3s;
  &:hover {
    text-decoration: none;
    color: #5c5c5c;
  }
  &:not(:last-child) {
    margin-right: 1em;
  }
`;
