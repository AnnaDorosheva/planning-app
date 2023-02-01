import styled from "@emotion/styled";

export const Blackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(89, 85, 85, 0.7);
`;

export const Window = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
  font-size: var(--midium-font);
  word-break: break-all;
  color: var(--clr-gb-2);
  background-color: var(--clr-gb-8);
  border: 0.1rem solid rgba(0, 0, 0, .2);
  border-radius: 12px;
  padding: 10px;
  margin: 12px 0;

  &:hover,
  &:focus {
    color: var(--clr-white);
    background-color: var(--clr-gb-7);
    box-shadow: var(--clr-box-shadow1);
    transition: background-color 0.5s ease;
  }
`;

export const Header = styled.h2`
text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--clr-gb-2);
  text-shadow: 5px 5px 5px #000000;
  padding: 10px 10px 6px 10px;
`;

export const Status = styled.p`
  font-weight: 500;
  padding: 6px;
  color: ${(props) => props.status ? "var(--clr-green)" : "var(--clr-pink)"};
  text-shadow: 5px 5px 5px #000000;
`;
