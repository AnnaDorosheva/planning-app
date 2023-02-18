import React from "react";
import { Button } from "../commons/Button";
import s from "./Instruction.module.css";
import { MdDisabledByDefault } from "react-icons/md";

const Instruction = ({onClose}) => {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Instruction:</h1>
      <p>
        You can create a note, it will be added to the
        field for all notes. Notes can be filtered by a given word or part of a
        word in a filter. Note text can be edited after you click on the note. Notes can be swapped by dragging
        the mouse and you can mark completed by clicking on the existing icon in
        the note. Enjoy!
      </p>
      <div className={s.button}>
      <Button onClick={onClose} icon={<MdDisabledByDefault />}></Button>
      </div>
    </div>
  );
};

export default Instruction;
