import styled from "@emotion/styled";

export const Blackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.5);
`;

export const Window = styled.div`
  justify-content: center;
  align-items: center; 
  padding: 8px;
  background-color: ${props => props.status ? "rgb(250, 234, 214)" : "pink"};

`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: gray;
`;

export const Description = styled.p`
font-size: 18px;
`
export const Status = styled.p` 
font-weight: 500;
`
