import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [description, setDes] = useState("");
	const [todoArray, setTodoArray] = useState([
		{
			title: "demo",
			description: "demoDes",
			done: false,
		},
	]);
	const [flag,setFlag]=useState(true);

	useEffect(
		function(){
			setInterval(()=>
				setFlag((flag)=>  {
					return !flag;
				}),5000
			);
		},
		[]
	);

	function AddTodo(task) {
		let newArray = [...todoArray, task];
		// newArray.push(task);
		setTodoArray(newArray);
	}

	return (
		<>
			<div>
				<h1>My-Todo</h1>
			</div>

			<div>
				<input
					type="text"
					placeholder="Enter todo title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Enter todo description"
					value={description}
					onChange={(e) => setDes(e.target.value)}
				/>

				<button
					onClick={() =>
						AddTodo({
							title,
							description,
							done: true,
						})
					}
				>
					add
				</button>
			</div>

			<div>
				{todoArray.map((todo, index) => {
					return (
						<ToDoComp
							key={index}
							title={todo.title}
							description={todo.description}
							done={true}
						/>
					);
				})}
			</div>

			<div>
				{flag?<Counter></Counter>:null}
			</div>
		</>
	);
}

function ToDoComp(props) {
	return (
		<>
			<br />
			<div>
				<h2>Title: {props.title}</h2>
				<h3>
					Description: <p>{props.description}</p>
				</h3>
				<h4>{props.done ? "Task is Done" : "Task is not done"}</h4>
			</div>
			<br />
		</>
	);
}

function Counter() {
	const [cnt, setCnt] = useState(0);
	console.log(`counter:${cnt}`);
	useEffect(
		function () {
			console.log("On mount");
			let clock=setInterval(() => setCnt((cnt) => cnt + 1), 1000);

			return function(){
				console.log("Unmount");
				clearInterval(clock);
			}

		},
		[],
	);
	return (
		<>
			<h1>{cnt}</h1>
			{/* <button onClick={()=>{setCnt(cnt+1)}}>increase</button>
		<button onClick={()=>{setCnt(cnt-1)}}>decrease</button>
		<button onClick={()=>{setCnt(0)}}>reset</button> */}
		</>
	);
}

export default App;
