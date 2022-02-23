import React from "react";
import {CgClose, CgInfo} from "react-icons/cg"
import { useNavigate  } from 'react-router-dom';


import "./Task.css"

const Task = ({id, title, completed, handleTaskClick, handleTaskRemove}) => {
    const navigate = useNavigate ();

    const handleTaskDetailsClick = () => {
        console.log("TaskDetailsClick");
        navigate(`/${title}`)
    }
   return(
    <>
        <div className="task-container" style={ completed ? { borderLeft: '6px solid chartreuse'} : {} }>
            <div className="task-title" onClick={() => handleTaskClick(id)}>
                {title}
            </div>
            <div className="buttons-container">
                <CgClose className="remove-task-button" onClick={() => handleTaskRemove(id)}></CgClose>
                <CgInfo className="see-task-info-button" onClick={handleTaskDetailsClick}></CgInfo>
            </div>
        </div>
    </>
   );
};

export default Task;
