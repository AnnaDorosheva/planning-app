import React from "react";
import { createPortal } from "react-dom";
import { MdDisabledByDefault } from "react-icons/md";
import { Button } from "../commons/Button";
import { Textarea } from "../commons/Textarea";
import {
  Blackdrop,
  Window,
  Header,
  Status,
} from "./ModalWindow.styled";

const ModalWindow = (props) => {
  const modalRoot = document.querySelector("#modal-root");

  return createPortal(
    <Blackdrop onClick={props.closeModal}>
      <Window status={props.status}>
        <Header>{props.title}</Header>
        <Textarea value={props.description} onChange={(e, id) => props.correctTextTodo(e, props.id)}/>
        <Status>status: {props.status ? "done" : "nor ready"}</Status>
        <Button onClick={props.closeModal} icon={<MdDisabledByDefault />}>
          Close
        </Button>
      </Window>
    </Blackdrop>, modalRoot
  );
};

export default ModalWindow;
