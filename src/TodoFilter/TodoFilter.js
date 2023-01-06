import React from 'react';
import s from "./TodoFilter.module.css";

const TodoFilter = ({filter, onFilter}) => {
  return (
    <div className={s.filterContainer}>
    <label>
        Filter:
        <input type="text" value={filter} onChange={onFilter} className={s.input}/>
    </label>
    </div>
  )
};

export default TodoFilter;