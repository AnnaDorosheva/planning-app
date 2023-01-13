import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  color: var(--clr-gb-2);
  font: inherit;
  font-size: var(--base-font);
  transition: color 3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 2.5rem;
  border: 0.1rem solid var(--clr-gb-5);
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--clr-gb-5);
    box-shadow: var(--clr-box-shadow1);
    transition: background-color 0.5s ease;
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
