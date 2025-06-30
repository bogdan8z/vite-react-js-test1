import TaskDetails from "./TaskDetails";

const TaskList = ({tasks, onEditTask, onDeleteTask}) => {



    return (
        <div>
   
           <ul>{tasks.map((task, index) => (
                <li key={task.id}>
                   <TaskDetails onDelete={onDeleteTask} onChange={onEditTask} task={task}></TaskDetails>
                </li>
            ))}

            </ul>
        </div>
    );
};



export default TaskList;







