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

  padding: 8px;
  background-color: ${(props) =>
    props.status ? "rgb(250, 234, 214)" : "pink"};
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: gray;
`;

export const Status = styled.p`
  font-weight: 500;
`;
