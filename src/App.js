import React, { useState, useEffect } from "react";
import s from "./App.module.css";
import TodoList from "./TodoList/TodoList";
import TodoCreator from "./TodoCreator/TodoCreator";
import TodoFilter from "./TodoFilter/TodoFilter";

const App = () => {
  const [itemsArr, setItemsArr] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsArr));
  }, [itemsArr]);

  const addItem = (todo) => {
    setItemsArr((itemsArr) => [...itemsArr, todo]);
  };

  const deleteItem = (id) => {
    const newArr = itemsArr.filter((i) => i.id !== id);
    setItemsArr(newArr);
  };

  const changeIsDone = (id) => {
    const newArr = itemsArr.map((i) => {
      if (i.id === id) {
        return { ...i, isDone: !i.isDone };
      }
      return i;
    });

    setItemsArr(newArr);
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className={s.container}>
      <h1 className={s.nameApp}>Create TODO</h1>
      <TodoCreator pushItem={addItem} />
      <TodoFilter onFilter={handleFilter} filter={filter} />
      <TodoList
        itemsArr={itemsArr}
        filter={filter}
        deleteItem={deleteItem}
        changeIsDone={changeIsDone}
      />
    </div>
  );
};

export default App;
