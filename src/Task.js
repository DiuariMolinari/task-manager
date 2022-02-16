import React from "react";
import "./Task.css"

const Task = ({id, title, completed}) => {
   return(
    <>
        <div className="task-container">
            <label>{id}</label>
            <label>{title}</label>
            <label>{completed.toString()}</label>
        </div>
    </>
   );
};

export default Task;
