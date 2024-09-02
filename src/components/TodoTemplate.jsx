import React from "react";
import "../style/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
    return <div className="template">{children}</div>;
};

export default TodoTemplate;
