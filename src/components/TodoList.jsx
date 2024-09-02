import React from "react";
import TodoItem from "./TodoItem";
import "../style/TodoList.scss";

const TodoList = (props) => {
    const { todos, removeHandler, checkHandler } = props;
    return (
        <ul className="todoList">
            {[...todos].reverse().map((item) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    removeHandler={removeHandler}
                    checkHandler={checkHandler}
                />
            ))}
        </ul>
    );
};

export default TodoList;
