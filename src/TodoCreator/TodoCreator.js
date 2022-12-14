import React, { Component } from "react";
import s from "./TodoCreator.module.css";
import { Button } from "../utils/Button";
import shortid from "shortid";

class TodoCreator extends Component {
  state = {
    todoHeader: "",
    todoText: "",
  };

  handleSubmitTodo = (e) => {
    e.preventDefault();
    const id = shortid.generate();
    this.props.pushItem({id, ...this.state});
    this.reset();
  };

  onChangeTodo = (e) => {
this.setState({[e.currentTarget.name]: e.currentTarget.value})
  };

  reset = () => {
    this.setState({
        todoHeader: "",
        todoText: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitTodo} className={s.form}>
        <label>
            Title:
        <input
          type="text"
          name="todoHeader"
          value={this.state.todoHeader}
          onChange={this.onChangeTodo}
          className={s.input}
          placeholder="Enter name..."
        />
        </label>
        <label>
            Description:
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.onChangeTodo}
          className={s.input}
          placeholder="Enter text..."
        />
        </label>
        <Button type="submit">Save</Button>
      </form>
    );
  }
}

export default TodoCreator;
