import React from 'react';

const TodoFilter = ({filter, onFilter}) => {
  return (
    <label>
        Filter:
        <input type="text" value={filter} onChange={onFilter} />
    </label>
  )
};

export default TodoFilter;