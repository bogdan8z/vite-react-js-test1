import { useState } from "react";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";

const TaskApp = () => {
const [tasks, setTasks] = useState(initialTasks);
const handleAddTask = (text) =>{
    setTasks([
        ...tasks,
        {
            id: nextId++,
            name: text,
            done: false
        },
    ]);
};

const handleEditTask = (task) => {   
    setTasks(prevTasks =>
        prevTasks.map((t) => {
            if(t.id == task.id){ //return the changed task
                return task;
            }
            else{
                return t;
            }
        })
    );
}

const handleDeleteTask = (id) => {
   setTasks(prevTasks =>
    prevTasks.filter((t) => t.id !== id));
}



return (
    <div>
        <h1>Task App</h1>
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

export default TaskApp;