import styled from "@emotion/styled";

export const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--small-font);
  word-break: break-all;
  color: var(--clr-gb-2);
  background-color: ${({background}) => background ? "var(--clr-gb-6)": "var(--clr-card-bg)"};
  border: 0.1rem solid var(--clr-gb-5);
  border-radius: 12px;
  padding: 6px;
  margin: 12px 0 ;
  

  &:hover,
  &:focus {
    color: var(--clr-white);
    background-color: var(--clr-gb-4);
    box-shadow: var(--clr-box-shadow1);
    transition: background-color 0.5s ease;
  }
`;
