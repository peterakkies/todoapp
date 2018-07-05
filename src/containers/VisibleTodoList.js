import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../redux/reducers/index";
import TodoList from "../components/TodoList";
import receiveTodos from "../redux/actions/receiveTodos";
import toggleTodo from "../redux/actions/toggleTodo";
import fetchTodos from "../api/index";

class VisibleTodoList extends Component {
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		const { filter } = this.props;
		if (filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() {
		const { filter, receiveTodos } = this.props;
		fetchTodos(filter).then((todos) => {
			receiveTodos(filter, todos);
		});
	}

	render() {
		const { toggleTodo, ...rest } = this.props;
		return <TodoList {...rest} onTodoClick={toggleTodo} />;
	}
}

const mapStateToProps = (state, { match }) => {
	const filter = match.params.filter || "all";
	return {
		todos: getVisibleTodos(state, filter),
		filter
	};
};

VisibleTodoList = withRouter(
	connect(
		mapStateToProps,
		{ toggleTodo, receiveTodos }
	)(VisibleTodoList)
);

export default VisibleTodoList;
