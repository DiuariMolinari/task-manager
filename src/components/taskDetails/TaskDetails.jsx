import React from "react";
import Button from "../button/Button";
import { useParams, useNavigate } from "react-router-dom";

import "./TaskDetails.css"

const TaskDatails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("/")
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="text-details-container">
                <h2>{ params.taskTitle }</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum iste placeat libero alias aperiam veritatis?
                </p>
            </div>

        </>
     );
}
 
export default TaskDatails;