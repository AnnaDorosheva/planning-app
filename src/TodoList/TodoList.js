import React from "react";
import s from "./TodoList.module.css";
import Todo from "../Todo/Todo";

const TodoList = ({ itemsArr, filter, deleteItem, changeIsDone, correctTextTodo }) => {
  const normalaizedFilter = filter.toLowerCase();

  const filteredTodos = itemsArr.filter((item) =>
    item.todoText.toLowerCase().includes(normalaizedFilter)
  );

  return (
    <div>
      <section className={s.todoListContainer}>
      <div className={s.heder}>
            <p>Title:</p>
            <p>Description:</p>
            <p>Status:</p>
          </div>
        <div className={s.todoList}>
          <ul className={s.list}>
            {itemsArr.length > 0 &&
              filteredTodos.map((item) => (
                <li key={item.id}>
                  <Todo item={item} delete={() => deleteItem(item.id)} changeIsDone={() => changeIsDone(item.id)} correctTextTodo={correctTextTodo}/>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
