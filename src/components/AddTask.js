import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task/bug')
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task/Bug</label>
                <input type='text' placeholder='Add 
                Task/Bug' value={text} 
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Due Date/Time</label>
                <input type='text' placeholder='Add Due Date/Time'
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>In Progress</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}
                /> 
            </div>

            <input type='submit' value='Save Task' 
            className='btn btn-block' />
        </form>
    )
}

export default AddTask
