const Form = ({inputText, setInputText, todoList, setTodoList, state, setState, filteredTodoList}) => {
	const inputTextHandler = (event) => {
		setInputText(event.target.value);
	};

	const submitTodoHandler = (event) => {
		event.preventDefault();
		setTodoList([
			...todoList,
			{
				text: inputText,
				completed: false,
				id: Math.random() * 1000,
			},
		]);
		setInputText("");
	};

	const changeStateHandler = (event) => {
		setState(event.target.value);
	};

	return (
		<form onSubmit={submitTodoHandler}>
			<input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" />
			<button className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo" value={state} onChange={changeStateHandler}>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
