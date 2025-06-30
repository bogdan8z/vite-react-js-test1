const TaskDetailsViewTemplate = ({isChecked, onEdit, onDelete, onCheckDone, name}) => {
  return  (
        <>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => onCheckDone(e)}></input>
            {name}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}

export default TaskDetailsViewTemplate;