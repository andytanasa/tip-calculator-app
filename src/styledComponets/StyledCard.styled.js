import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.neutral.white};
  width: 375px;
  height: 100%;
  margin: 0 auto;
  border-radius: 30px;
  padding-bottom: 15px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    position: relative;
    label {
      margin-bottom: 10px;
      padding-left: 5px;
      font-size: 24px;
    }
    input {
      text-align: right;
      width: 300px;
      font-size: 24px;
      font-weight: 700;
      padding: 10px;
      padding-left: 30px;
      padding-right: 20px;
      background: ${({ theme }) => theme.neutral.lightGrayishCyan};
      color: ${({ theme }) => theme.neutral.veryDarkCyan};
      outline: none;
      border: 0;
      margin: 0 auto;
      &::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        &:hover {
          -webkit-appearance: none;
        }
      }
    }

    span {
      font-size: 24px;
      position: absolute;
      top: 78px;
      left: 50px;
      color: ${({ theme }) => theme.neutral.darkGrayishCyanSec};
    }
  }
  h6 {
    text-align: left;
    padding-left: 40px;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    li {
      margin: 10px;
    }
  }
  & > div:nth-child(3) {
    position: relative;
    input {
      text-align: right;
      width: 300px;
      font-size: 24px;
      font-weight: 700;
      padding: 10px;
      padding-left: 30px;
      padding-right: 20px;
      background: ${({ theme }) => theme.neutral.lightGrayishCyan};
      color: ${({ theme }) => theme.neutral.veryDarkCyan};
      outline: none;
      border: 0;
      margin: 10px auto 10px;
    }
    span {
      color: ${({ theme }) => theme.neutral.darkGrayishCyanSec};
      position: absolute;
      left: 50px;
      top: 40px;
      font-size: 20px;
    }
  }
  div:nth-child(4) {
    margin: 30px;
    background-color: ${({ theme }) => theme.neutral.veryDarkCyan};
    color: white;
    border-radius: 20px;
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

    & > div:nth-child(1) {
      width: 50%;
      & > h6 {
        color: ${({ theme }) => theme.primary.strongCyan};
        margin-top: 10px;
      }
      & > span {
        font-size: 14px;
      }
    }
    & > div:nth-child(2) {
      width: 50%;
      & > p {
        text-align: right;
        margin-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        color: ${({ theme }) => theme.primary.strongCyan};
      }
    }
    & > Button {
      margin-top: 20px;
      width: 80%;
      background-color: ${({ theme }) => theme.primary.strongCyan};
      color: ${({ theme }) => theme.neutral.veryDarkCyan};
      &:hover {
        transform: scale(0.98);
      }
    }
  }
`;
