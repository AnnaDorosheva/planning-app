import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  color: var(--clr-gb-2);
  font: inherit;
  font-size: var(--base-font);
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  background: transparent;
  min-width: 20%;
  height: 2.5rem;
  border: 0.1rem solid var(--clr-gb-5);
  border-radius: 12px;
  padding: 4px;

  :hover,
  :focus {
    background-color: var(--clr-gb-5);
    box-shadow: var(--clr-box-shadow1);
  }
`;

export const Button = ({ icon = null, type = "button", children, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {icon}
      {children}
    </ButtonStyled>
  );
};
