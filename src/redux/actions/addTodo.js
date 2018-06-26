let nextTodoId = 0;
const AddTodo = text => {
  return {
    type: "ADD_TODO",
    text,
    id: nextTodoId++
  };
};

export default AddTodo;
