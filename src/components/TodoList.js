import Todo from "./Todo";

const TodoList = ({todoList, setTodoList, filteredTodoList}) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodoList.map((todo) => (
					<Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} />
				))}
			</ul>
		</div>
	);
};
export default TodoList;
