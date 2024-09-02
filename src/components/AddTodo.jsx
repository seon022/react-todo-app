import React, { useState } from "react";
import "../style/AddTodo.scss";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTodo = (props) => {
    const [newText, setNewText] = useState("");
    const { addHandler } = props;
    function clickAdd() {
        addHandler(newText);
        setNewText("");
    }
    return (
        <div className="addWrap">
            <div className="addformWrap">
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="할 일을 입력하세요."
                />
                <IoAddCircleOutline
                    onClick={clickAdd}
                    style={{ width: "30px", height: "30px" }}
                />
            </div>
        </div>
    );
};

export default AddTodo;
