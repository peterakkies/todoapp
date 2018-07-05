import { v4 } from "node-uuid";

// This is a fake, in-memory backend that simulates a REST API.

const fakeDatabase = {
	todos: [
		{
			id: v4(),
			text: "Mow the lawn",
			completed: false
		},
		{
			id: v4(),
			text: "Polish my shoes",
			completed: true
		},
		{
			id: v4(),
			text: "Go climbing!",
			completed: false
		}
	]
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchTodos = (filter) =>
	delay(500).then(() => {
		switch (filter) {
			case "all":
				return fakeDatabase.todos;
			case "completed":
				return fakeDatabase.todos.filter((t) => t.completed);
			case "active":
				return fakeDatabase.todos.filter((t) => !t.completed);
			default:
				throw new Error(`Unknown filter: ${filter}`);
		}
	});

export default fetchTodos;
