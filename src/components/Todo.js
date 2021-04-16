const Todo = ({todo, todoList, setTodoList}) => {
	const handleDeleteTodo = () => {
		setTodoList(todoList.filter((item) => item.id !== todo.id));
	};

	const handleCompleteTodo = () => {
		setTodoList(
			todoList.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: true,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
			<button onClick={handleCompleteTodo} className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={handleDeleteTodo} className="trash-btn">
				<i className="fas fa-trash  "></i>
			</button>
		</div>
	);
};
export default Todo;
