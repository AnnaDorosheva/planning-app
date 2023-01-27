import React, { Component } from "react";
import s from "./TodoCreator.module.css";
import { Button } from "../commons/Button";
import shortid from "shortid";
import { MdOutlineAddCircle } from "react-icons/md";

class TodoCreator extends Component {
  state = {
    todoHeader: "",
    todoText: "",
    isDone: false
  };

  handleSubmitTodo = (e) => {
    e.preventDefault();
    const id = shortid.generate();
    this.props.pushItem({ id, ...this.state });
    this.reset();
  };

  onChangeTodo = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  reset = () => {
    this.setState({
      todoHeader: "",
      todoText: "",
      isDone: false
    });
  };

  render() {
    return (
      <div className={s.creatorContainer}>
        <form onSubmit={this.handleSubmitTodo} className={s.form}>
          <label>
            Title:
            <input
              type="text"
              name="todoHeader"
              value={this.state.todoHeader}
              onChange={this.onChangeTodo}
              className={s.title}
              placeholder="Enter title..."
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="todoText"
              value={this.state.todoText}
              onChange={this.onChangeTodo}
              className={s.textarea}
              placeholder="Enter text..."
            />
          </label>
        </form>
        <div className={s.button}>
        <Button type="submit" onClick={this.handleSubmitTodo}>
          <MdOutlineAddCircle className={s.addIcon} />
          Save
        </Button>
        </div>
      </div>
    );
  }
}

export default TodoCreator;
