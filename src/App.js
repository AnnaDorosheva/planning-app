import React, { Component } from 'react';
import s from './App.module.css';
import TodoList from "./TodoList/TodoList";

export default class App extends Component {

  render() {
    return (
      <div  className={s.container}>
        <h1 className={s.nameApp}>Create TODO</h1>
        <TodoList />
      </div>
    )
  }
}



