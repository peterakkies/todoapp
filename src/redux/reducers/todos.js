import { combineReducers } from "redux";
import todo from "./todo";

const getAllTodos = (state) => state.AllIds.map((id) => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
	const allTodos = getAllTodos(state);
	switch (filter) {
		case "all":
			return allTodos;
		case "completed":
			return allTodos.filter((t) => t.completed);
		case "active":
			return allTodos.filter((t) => !t.completed);
		default:
			throw new Error(`Unknown filter: ${filter}`);
	}
};

export const byId = (state = {}, action) => {
	switch (action.type) {
		case "ADD_TODO":
		case "TOGGLE_TODO":
			return {
				...state,
				[action.id]: todo(state[action.id], action)
			};
		default:
			return state;
	}
};

export const AllIds = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.id];
		default:
			return state;
	}
};

const todos = combineReducers({
	byId,
	AllIds
});

export default todos;
