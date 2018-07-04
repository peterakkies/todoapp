import { v4 } from "node-uuid";

const AddTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});

export default AddTodo;
