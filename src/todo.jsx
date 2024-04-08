import React from "react";
const To = (props) => {

    return (
        <div className="todo-list">
            <button className="btn2" onClick={() => {
                props.delete(props.id)
            }}>X</button>
            <li>{props.current}</li>
        </div>
    )
}
export default To