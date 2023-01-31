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
      <Window>
        <Header>{props.title}:</Header>
        <Textarea value={props.description} onChange={(e, id) => props.correctTextTodo(e, props.id)}/>
        <div style={{display: "flex", width: "84%", justifyContent: "space-between", margin: "8px"}}>
        <Status status={props.status}>Status: {props.status ? "Done" : "Not ready"}</Status>
        <Button onClick={props.closeModal} icon={<MdDisabledByDefault />}>
          Close
        </Button>
        </div>
      </Window>
    </Blackdrop>, modalRoot
  );
};

export default ModalWindow;
