import React from 'react';
import { MdDisabledByDefault } from "react-icons/md";
import { Button } from "../utils/Button";

import { Blackdrop, Window, Header, Description, Status } from "./ModalWindow.styled";

const ModalWindow = (props) => {
// console.log(props)
  return (
    <Blackdrop onClick={props.closeModal}>
          <Window status={props.status}>
        <Header>{props.title}</Header>
        <Description>discription: {props.description}</Description>
        <Status >status: {props.status ? "done" : "nor ready"}</Status>
        <Button onClick={props.closeModal} icon={<MdDisabledByDefault/>}>Close</Button>
    </Window>
    </Blackdrop>
  )
}

export default ModalWindow;