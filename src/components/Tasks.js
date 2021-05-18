import Task from './Task'
import Note from './Note'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        <Note />
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
