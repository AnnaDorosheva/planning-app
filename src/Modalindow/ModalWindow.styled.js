import styled from "@emotion/styled";

export const Blackdrop = styled.div`
  position: fixed;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(89, 85, 85, 0.5);
`;

export const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;

  font-size: var(--midium-font);
  word-break: break-all;
  color: var(--clr-gb-2);
  background-color: ${(props) =>
    props.status ? "var(--clr-gb-4)" : "var(--clr-gb-4)"};
  border: 0.1rem solid var(--clr-gb-5);
  border-radius: 12px;
  padding: 6px;
  margin: 12px 0;

  &:hover,
  &:focus {
    color: var(--clr-white);
    background-color: var(--clr-gb-4);
    box-shadow: var(--clr-box-shadow1);
    transition: background-color 0.5s ease;
  }
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: gray;
`;

export const Status = styled.p`
  font-weight: 500;
`;
