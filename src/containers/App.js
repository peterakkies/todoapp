import React from "react";
import { connect } from "react-redux";
import "./App.css";

import AddTodo from "../components/AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "../components/Footer";

const App = () => (
	<div className="App">
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
	visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
	onTodoClick: (id) => dispatch("TOGGLE_TODO", id)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
