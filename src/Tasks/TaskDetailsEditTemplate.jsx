const TaskDetailsEditTemplate = ({onChangeName, name, onSave, onCancel}) => {
  return  (
    <>
        <input onChange={onChangeName} value={name} />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
    </>
)
}

export default TaskDetailsEditTemplate;