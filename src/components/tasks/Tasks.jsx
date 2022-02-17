import React from "react";
import Task from '../task/Task';


const Tasks = ({ tasks, handleTaskClick, handleTaskRemove }) => {
    
    return (
        <>
            {tasks.map((x) => <Task id={x.id} title={x.title} completed={x.completed}  handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />)}
        </>
    );
};

export default Tasks;
