import React from "react";
import Task from './Task';


const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((x) => <Task id={x.id} title={x.title} completed={x.completed} />)}
        </>
    );
};

export default Tasks;
