import React from "react";
import { connect } from "react-redux";

let nextTodoId = 0;

const AddTodo = ({ dispatch }) => {
  return (
    <div id="addTodo">
      <input
        ref={node => {
          this.input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: this.input.value
          });
          this.input.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
