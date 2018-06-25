import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import AddTodo from "./containers/AddTodo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <ul>
          {this.props.todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
