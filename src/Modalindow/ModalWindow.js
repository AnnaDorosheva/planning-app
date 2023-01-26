import React from "react";
import { createPortal } from "react-dom";
import { MdDisabledByDefault } from "react-icons/md";
import { Button } from "../commons/Button";

import {
  Blackdrop,
  Window,
  Header,
  Description,
  Status,
} from "./ModalWindow.styled";

const ModalWindow = (props) => {
  const modalRoot = document.querySelector("#modal-root");

  return createPortal(
    <Blackdrop onClick={props.closeModal}>
      <Window status={props.status}>
        <Header>{props.title}</Header>
        <Description>discription: {props.description}</Description>
        <Status>status: {props.status ? "done" : "nor ready"}</Status>
        <Button onClick={props.closeModal} icon={<MdDisabledByDefault />}>
          Close
        </Button>
      </Window>
    </Blackdrop>, modalRoot
  );
};

export default ModalWindow;
