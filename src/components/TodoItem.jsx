import React, { useState } from "react";
import "../style/TodoItem.scss";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoItem = (props) => {
    const { item, removeHandler, checkHandler } = props;
    function clickRemove() {
        removeHandler(item.id);
    }
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => {
                        checkHandler(item.id);
                    }}
                />
                <span>{item.contents}</span>
            </label>
            <RiDeleteBinLine
                onClick={clickRemove}
                style={{ width: "24px", height: "24px" }}
            />
        </li>
    );
};

export default TodoItem;
