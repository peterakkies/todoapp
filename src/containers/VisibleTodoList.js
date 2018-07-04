import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../redux/reducers/index";
import TodoList from "../components/TodoList";
import toggleTodo from "../redux/actions/toggleTodo";

const mapStateToProps = (state, { match }) => ({
	todos: getVisibleTodos(state, match.params.filter || "all")
});

const VisibleTodoList = withRouter(
	connect(
		mapStateToProps,
		{ onTodoClick: toggleTodo }
	)(TodoList)
);

export default VisibleTodoList;
