import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import AddTodo from "../components/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
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

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch("TOGGLE_TODO", id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
