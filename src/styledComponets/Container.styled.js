import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.neutral.lightGrayishCyan};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
  h1 {
    margin: 0 auto;
    text-align: center;
    max-width: 180px;
    word-wrap: break-word;
    letter-spacing: 10px;
    padding: 30px 0px 30px;
    color: ${({ theme }) => theme.neutral.veryDarkCyan};
  }
`;
