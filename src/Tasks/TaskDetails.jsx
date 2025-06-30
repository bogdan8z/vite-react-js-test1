import { useState } from "react";
import TaskDetailsViewTemplate from "./TaskDetailsViewTemplate";
import TaskDetailsEditTemplate from "./TaskDetailsEditTemplate";

export function TaskDetails({ task, onDelete, onChange }) {
    const [editMode, setEditMode] = useState(false);
    const [editedName, setEditedName] = useState(task.name);

    const handleCheckDone = (e) => {
        onChange({ ...task, done: e.target.checked });
    };

    const handleDelete = () => {
        if (!confirm('Are you sure?')) {
            return false;
        }
        onDelete(task.id);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = (e) => {
        onChange({ ...task, text: e.target.value });
        setEditMode(false);
    };

    return (
        <>
            {!editMode ?
                <TaskDetailsViewTemplate 
                    isChecked={task.done} 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} 
                    onCheckDone={handleCheckDone} 
                    name={editedName}>                        
                </TaskDetailsViewTemplate>
                :    
                <TaskDetailsEditTemplate
                    onChangeName={(e) => setEditedName(e.target.value)}
                    name={editedName}
                    onSave={handleSave}
                    onCancel={() => setEditMode(false)}
                    >
                </TaskDetailsEditTemplate>
                }
        </>
    );
}


export default TaskDetails;