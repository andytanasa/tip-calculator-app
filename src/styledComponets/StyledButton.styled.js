import styled from "styled-components";

export const StyledButton = styled.button`
  width: 140px;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ theme, color }) =>
    color ? color : theme.neutral.veryDarkCyan};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    transform: scale(0.98);
  }
`;
