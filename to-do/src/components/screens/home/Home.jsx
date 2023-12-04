import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
	{
		_id: "wefw23",
		title: "Finish homework",
		isCompleted: false,
	},
	{
		_id: "wefw23232",
		title: "Read next chapter of the book",
		isCompleted: false,
	},
	{
		id: "wefw2gwefcev3",
		title: "Meet with friends",
		isCompleted: false,
	},
];

const Home = () => {
	const [todos, setTodos] = useState(data);

	const changeTodo = (id) => {
		const copy = [...todos];
		const current = copy.find((t) => t._id === id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
	};

	const removeTodo = (id) => setTodos([...todos].filter((t) => t.id != id));

	const addTodo = (title) => {
		setTodos([
		 {
				_id: new Date(),
				title,
				isCompleted: false,
			},
			...todos,
		]);
	};


	return (
		<div className="text-white w-4/5 mx-auto">
			<h1 className="text-2xl font-bold text-center mb-10">Todo for junior</h1>
			{todos.map((todo, i) => (
				<TodoItem
					key={i}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField addTodo={addTodo} />
		</div>
	);
};

export default Home;
