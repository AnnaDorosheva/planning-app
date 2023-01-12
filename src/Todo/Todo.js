import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ModalWindow from "../Modalindow/ModalWindow";
import { TodoContainer } from "./Todo.styled";
import { Button } from "../utils/Button";
import s from "./Todo.module.css";

const Todo = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const changeIsDone = () => {
    setIsDone(!isDone);
  };

  const openModal = (e) => {
    setIsOpenModal(!isOpenModal);
  };

  const closeBlackdropModal = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  return (
    <>
      <TodoContainer>
        <p className={s.title} onClick={openModal}>{props.item.todoHeader}</p>
        <p className={s.text} onClick={openModal}>{props.item.todoText}</p>

        <input
          className={s.checkbox}
          type="checkbox"
          name="isDone"
          onChange={changeIsDone}
          checked={isDone}
        />
        <Button onClick={props.delete} icon={<MdDeleteForever />}></Button>
      </TodoContainer>
      <>
        {isOpenModal && (
          <ModalWindow
            closeModal={closeBlackdropModal}
            title={props.item.todoHeader}
            description={props.item.todoText}
            status={isDone}
          />
        )}
      </>
    </>
  );
};

export default Todo;
