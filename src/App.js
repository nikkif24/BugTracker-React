import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ ])

const addTask =  (task) => {
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = { id, ...task}
  
  setTasks([...tasks, newTask])
}

const deleteTask =  (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder:
      !task.reminder} : task
      )
  )
}

useEffect(() => {
  const taskValues = window.localStorage.getItem('bug')
  console.log(taskValues)
  setTasks(JSON.parse(taskValues))
}, [])

useEffect(() => {
  window.localStorage.setItem('bug', JSON.stringify(tasks))
})


return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
            (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              'No Bugs to Fix'
            )}
   <Footer />
    </div>

)
}

export default App
