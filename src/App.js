import { useRef, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, contents: "할잃11", status: true },
        { id: 2, contents: "할잃22", status: false },
        { id: 3, contents: "할잃333", status: false },
    ]);
    const nextId = useRef(4);

    // 새로운 todo 추가
    const addHandler = (text) => {
        // 새로운 todo객체
        const newTodo = { id: nextId.current, contents: text, status: false };

        //  기존todos에  새로운 todos 추가
        setTodos((prev) => [...prev, newTodo]);
        // nextId값 증가
        nextId.current += 1;
        console.log(todos);
    };
    // todo제거 기능
    const removeHandler = (id) => {
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };
    // todo 체크여부 수정
    const checkHandler = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, status: !todo.status } : todo
            )
        );
    };
    return (
        <div className="App">
            <TodoTemplate>
                <h1>TODO APP</h1>
                <AddTodo todos={todos} addHandler={addHandler} />
                <TodoList
                    todos={todos}
                    removeHandler={removeHandler}
                    checkHandler={checkHandler}
                />
            </TodoTemplate>
        </div>
    );
}

export default App;
