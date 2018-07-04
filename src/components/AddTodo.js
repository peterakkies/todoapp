import React from "react";
import { connect } from "react-redux";
import addTodo from "../redux/actions/addTodo";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="addTodo">
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
