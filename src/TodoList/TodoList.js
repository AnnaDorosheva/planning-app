import React, { useState } from "react";
import s from "./TodoList.module.css";
import TodoCreator from "../TodoCreator/TodoCreator";
import Todo from "../Todo/Todo";
import TodoFilter from "../TodoFilter/TodoFilter";

const TodoList = () => {
  const [itemsArr, setItemsArr] = useState([]);
  const [filter, setFilter] = useState("");

  const normalaizedFilter = filter.toLowerCase();
  
  const addItem = (todo) => {
    setItemsArr((itemsArr) => [...itemsArr, todo]);
  };

  const deleteItem = (id) => {
    const newArr = itemsArr.filter((i) => i.id !== id);
    setItemsArr(newArr);
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredTodos = itemsArr.filter((item) =>
    item.todoText.toLowerCase().includes(normalaizedFilter)
  );

  return (
    <div>
      <section className={s.todoListContainer}>
        <TodoCreator pushItem={addItem} />
        <TodoFilter onFilter={handleFilter} filter={filter} />
        <div className={s.todoList}>
          <p>ID</p>
          <p>Title</p>
          <p>Description</p>
          <p>status</p>
        </div>
        <ul>
          {itemsArr.length > 0 &&
            filteredTodos.map((item) => (
              <li key={item.id}>
                <Todo item={item} delete={() => deleteItem(item.id)} />
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
