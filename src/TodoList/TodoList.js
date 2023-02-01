import s from "./TodoList.module.css";
import Todo from "../Todo/Todo";

const TodoList = ({
  itemsArr,
  filter,
  deleteItem,
  changeIsDone,
  correctTextTodo,
  setCurrentCard,
  chengeItemsArrOrders,
}) => {
  const normalaizedFilter = filter.toLowerCase();

  const filteredTodos = itemsArr.filter((item) =>
    item.todoText.toLowerCase().includes(normalaizedFilter)
  );

  // DRAG & DROP logic:
  
  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const dragStartHeanler = (e, card) => {
    setCurrentCard(card);
  };
  const dragEndHeanler = (e) => {};
  const dragOverHeanler = (e) => {
    e.preventDefault();
  };
  const dragHeanler = (e, card) => {
    e.preventDefault();
    chengeItemsArrOrders(itemsArr, card);
  };

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
              filteredTodos.sort(sortCards).map((item) => (
                <li
                  key={item.id}
                  draggable={true}
                  onDragStart={(e) => dragStartHeanler(e, item)}
                  onDragLeave={(e) => dragEndHeanler(e)}
                  onDragEnd={(e) => dragEndHeanler(e)}
                  onDragOver={(e) => dragOverHeanler(e)}
                  onDrop={(e) => dragHeanler(e, item)}
                >
                  <Todo
                    item={item}
                    delete={() => deleteItem(item.id)}
                    changeIsDone={() => changeIsDone(item.id)}
                    correctTextTodo={correctTextTodo}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
