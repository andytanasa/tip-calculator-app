import React from "react";
import { StyledButton } from "../styledComponets/StyledButton.styled";

const Button = ({ value, color, bgcolor }) => {
  return (
    <StyledButton color={color} bgcolor={bgcolor}>
      {value}
    </StyledButton>
  );
};

export default Button;
