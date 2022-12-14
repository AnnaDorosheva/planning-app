import React from 'react';
import styled from "@emotion/styled";

const ButtonStyle = styled.button` 
display: flex;
justify-content: center;
align-items: center;
gap: 2px;
background-color: #D7DEE0;
width: 80px;
height: 40px;
border: 2px solid #66838C;
border-radius: 8px;
padding: 4px;

:hover, :focus {
    background-color: #Afd4e0;
    border: 2px solid #5e6364;
    box-shadow: 0 10px 18px rgba(0,0,0,0.25), 0 6px 10px rgba(0,0,0,0.22);
}
`

export const Button = ({ icon = null, type = "button", children, onClick }) => {
return <ButtonStyle type={type} onClick={onClick}>
    {icon}
    {children}
    </ButtonStyle>
};

