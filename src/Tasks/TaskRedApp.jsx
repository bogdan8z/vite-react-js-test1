import React, { useReducer } from 'react';
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import {tasksReducer} from "./reducers/task-reducer";

const TaskRedApp = () => {
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
const handleAddTask = (text) =>{
    dispatch({
    // "action" object:
        type: 'added',
        id: nextId++,
        name: text,
    })
};

const handleEditTask = (task) => {   
    dispatch({
        type: 'edited',
        task: task
    })
}

const handleDeleteTask = (id) => {
    dispatch({
        type: 'deleted',
        id: id
    })
}



return (
    <div>
        <h1>Task App - Reducers</h1>
        <TaskAdd onAddTask={handleAddTask}></TaskAdd>
        <TaskList onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} tasks={tasks}></TaskList> 
    </div> 
)
}

let nextId = 3;
const initialTasks = [
    {id: 0, name: 'Visit Kafka Museum', done: true},
    {id: 1, name: 'Watch a puppet show', done: false},
    {id: 2, name: 'Lennon Wall pic', done: false},
  ];

export default TaskRedApp;