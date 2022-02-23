import React, { useState, useEffect } from "react";

import Task from '../task/Task';
import Api from '../../services/Api';
import AddTask from '../addTask/AddTask';

const Tasks = () => {
    useEffect(()=>{
        console.log("FIRST getTask");
        getTasks();
    }, [])

    const [tasks, setTasks] = useState([]);

    function getTaskById(taskId) {
        console.log("getTaskById");
        return tasks.find(task => task.id === taskId)
    };

    async function getTasks() {
        console.log("getTasks");
        return await Api.get("/api/task")
        .then((response) => setTasks(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    };

    async function updateTask(task) {
        console.log("updateTask");
        return await Api.put(`/api/task/${task.id}`, task)
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    };

    async function handleTaskClick(taskId){
        console.log("ClickTask");
        
        const editedTask = getTaskById(taskId);
        editedTask.completed = !editedTask.completed;
        
        await updateTask(editedTask);
        getTasks();
    }

    async function addTask(task) {
        console.log("addTasks");
        return await Api.post("/api/task", task)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    };

    async function handleAddTask (taskTitle) {
        await addTask({
            title: taskTitle,
            completed: false
          });
          
        getTasks();
    }

    async function taskRemove (taskId) {
        console.log("TaskRemove");
        await Api.delete(`/api/task/${taskId}`)
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    async function handleTaskRemove(taskId){
        await taskRemove(taskId);
        getTasks();
    }

    return (
        <>
            <AddTask handleAddTask={handleAddTask} handleTaskClick={handleTaskClick} />
            {tasks.map((x) => <Task id={x.id} title={x.title} completed={x.completed}  handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />)}
        </>
    );
};

export default Tasks;
