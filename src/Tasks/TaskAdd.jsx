import { useState } from "react";

const TaskAdd = ({onAddTask}) => {
    const [text, setText]= useState('');

    const handleAdd = () => { 
        onAddTask(text); 
        setText(''); 
    };
    const handleChangeText = (e) => {
        setText(e.target.value);
    }
    return (
        <div>
            <input value={text} placeholder="Add task" onChange={handleChangeText} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );

   
}
export default TaskAdd;