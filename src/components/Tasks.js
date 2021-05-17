import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        'Double click to show "in progress" status with greens sidebar'
        <>
         {tasks.map((task, index) => (
         <Task key={index} task={task} 
         onDelete={onDelete} 
         onToggle={onToggle}
         />
         ))}
        </>
    )
}

export default Tasks
