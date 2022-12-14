import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ModalWindow from "../Modalindow/ModalWindow"; 
import { TodoContainer} from "./Todo.styled";
import { Button } from "../utils/Button";

const Todo = (props) => {

  const [isDone, setIsDone] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const changeIsDone = () => {
    setIsDone(!isDone);
  };

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeBlackdropModal = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  return (
    <>
      <TodoContainer onClick={openModal}>
        <p>{props.item.id}</p>
        <p>{props.item.todoHeader}</p>
        <p>{props.item.todoText}</p>
      </TodoContainer>
      <input
        type="checkbox"
        name="isDone"
        onChange={changeIsDone}
        checked={isDone}
      />
      <Button onClick={props.delete} icon={<MdDeleteForever/>}>
         Delete
      </Button>
      <>
        {isOpenModal && (
          <ModalWindow closeModal={closeBlackdropModal} title={props.item.todoHeader} description={props.item.todoText} status={isDone} />
        )}
      </>
    </>
  );
};

export default Todo;
