import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
`;

export const Container = styled.div`
  max-width: 56em;
  margin: 0 auto;
  background: #${(props) => props.background};
`;
