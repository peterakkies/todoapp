import * as actions from "../store/reducers/todos.js";

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];

  test("Add a todo", () => {
    expect(actions.todos(stateBefore, action)).toEqual(stateAfter);
  });
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: false
    }
  ];
  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: true
    }
  ];

  test("Toggle todo", () => {
    expect(actions.todos(stateBefore, action)).toEqual(stateAfter);
  });
};

testAddTodo();
testToggleTodo();
