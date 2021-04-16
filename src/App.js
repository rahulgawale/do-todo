import "./App.css";
import {useState, useEffect} from "react";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
/* let notesList = [
	{
		body: "First Note",
		completed: true,
	},
	{
		body: "Second Note",
		completed: true,
	},
];
 */
function App() {
	const [inputText, setInputText] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [state, setState] = useState("all");
	const [filteredTodoList, setFilteredTodoList] = useState([]);

	// Use effect
	useEffect(() => {
		const getLocalTodoList = () => {
			if (localStorage.getItem("todoList") === null) {
				localStorage.setItem("todoList", JSON.stringify([]));
			} else {
				setTodoList(JSON.parse(localStorage.getItem("todoList")));
			}
		};

		getLocalTodoList();
	}, []);

	// Use effect
	useEffect(() => {
		switch (state) {
			case "completed":
				setFilteredTodoList(todoList.filter((item) => item.completed === true));
				break;
			case "uncompleted":
				setFilteredTodoList(todoList.filter((item) => item.completed === false));
				break;
			default:
				setFilteredTodoList(todoList);
		}

		const saveLocalTodoList = () => {
			localStorage.setItem("todoList", JSON.stringify(todoList));
		};

		saveLocalTodoList();
	}, [todoList, state]);

	return (
		<div className="App">
			<header>
				<h1>Todo Do</h1>
			</header>
			<Form inputText={inputText} setInputText={setInputText} todoList={todoList} setTodoList={setTodoList} state={state} setState={setState} filteredTodoList={filteredTodoList} />

			<TodoList todoList={todoList} setTodoList={setTodoList} filteredTodoList={filteredTodoList} />
		</div>
	);
}

export default App;
