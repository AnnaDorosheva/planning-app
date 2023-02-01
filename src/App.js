import React, { useState, useEffect } from "react";
import s from "./App.module.css";
import { MdDeleteForever } from "react-icons/md";
import TodoList from "./TodoList/TodoList";
import TodoCreator from "./TodoCreator/TodoCreator";
import TodoFilter from "./TodoFilter/TodoFilter";
import { Button } from "./commons/Button";

const App = () => {
  const [itemsArr, setItemsArr] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [filter, setFilter] = useState("");
  const [currentCard, setCurrentCard] = useState(null);

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

  const correctTextTodo = (e, id) => {
    const newArr = itemsArr.map((i) => {
      if (i.id === id) {
        return { ...i, todoText: e.target.value };
      }
      return i;
    });
    setItemsArr(newArr);
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  // Drag & drop change order cards:
  const chengeItemsArrOrders = (arr, card) => {
    setItemsArr(
      itemsArr.map((item) => {
        if (item.id === card.id) {
          return { ...item, order: currentCard.order };
        }
        if (item.id === currentCard.id) {
          return { ...item, order: card.order };
        }
        return item;
      })
    );
  };

  // DELETE all items:

  const onDeleteAllItems = () => {
    setItemsArr([]);
  };

  return (
    <div className={s.container}>
      <h1 className={s.nameApp}>Create TASKS</h1>
      <TodoCreator pushItem={addItem} />
      <TodoFilter onFilter={handleFilter} filter={filter} />
      <TodoList
        itemsArr={itemsArr}
        filter={filter}
        deleteItem={deleteItem}
        changeIsDone={changeIsDone}
        correctTextTodo={correctTextTodo}
        setCurrentCard={setCurrentCard}
        chengeItemsArrOrders={chengeItemsArrOrders}
      />
      <div className={s.button}>
        <Button
          icon={<MdDeleteForever className={s.deletIcon} />}
          onClick={onDeleteAllItems}
        >
          Delete all
        </Button>
      </div>
    </div>
  );
};

export default App;
