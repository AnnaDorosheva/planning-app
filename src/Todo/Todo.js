import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import ModalWindow from "../Modalindow/ModalWindow";
import { TodoContainer } from "./Todo.styled";
import { Button } from "../commons/Button";
import s from "./Todo.module.css";

const Todo = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleOpenModal = (e) => {
    setIsOpenModal(!isOpenModal);
  };

  const closeBlackdropModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleOpenModal();
    }
  };

  const closeWindow = (e) => {
    if (e.code === "Escape") {
      setIsOpenModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", closeWindow);
    return () => {
      window.removeEventListener("keydown", closeWindow);
    };
  }, [isOpenModal]);

  return (
    <>
      <TodoContainer background={props.item.isDone} draggable={true}>
        <p className={s.title} onClick={toggleOpenModal}>
          {props.item.todoHeader}
        </p>
        <p className={s.text} onClick={toggleOpenModal}>
          {props.item.todoText}
        </p>
<div className={s.checkboxContainer}>
<input
          className={s.checkbox}
          type="checkbox"
          name="isDone"
          onChange={props.changeIsDone}
          checked={props.item.isDone}
        />
        <span className={s.checkboxIcon}></span>
</div>
        <Button onClick={props.delete} icon={<MdDeleteForever />}></Button>
      </TodoContainer>
      <>
        {isOpenModal && (
          <ModalWindow
            closeModal={closeBlackdropModal}
            id={props.item.id}
            title={props.item.todoHeader}
            description={props.item.todoText}
            status={props.item.isDone}
            correctTextTodo={props.correctTextTodo}
          />
        )}
      </>
    </>
  );
};

export default Todo;
