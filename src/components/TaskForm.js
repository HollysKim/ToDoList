import React, {useState} from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const TaskForm = ({setTaskList}) => {

    const [createBtn, setCreateBtn] = useState(false)
    const [date, setDate] = useState(new Date())
    const submitTaskForm = (event) => {
        event.preventDefault()
        const task = {
            id: Math.random()*100,
            name: event.target.name.value,
            description: event.target.description.value,
            date: event.target.date.value,
            expand: false
        }
        
        setTaskList(task)
        setCreateBtn(false)
    }

    return(
        <div>
            <button className="createBtn" onClick={()=>setCreateBtn(true)}>Create new task</button>
            {createBtn
            ? <form onSubmit={submitTaskForm} className="form">
                <label>Task name</label>
                <input name='name' type="text" required></input>
                <label>Task description</label>
                <input name='description' type='text'></input>
                <label>Task due date</label>
                <ReactDatePicker selected={date} 
                    name="date"
                    dateFormat={'MM-dd-yyyy'}
                    onChange={newDate => setDate(newDate)}
                    minDate={new Date()}
                    required
                />
                <input className="formBtn" type="submit" value='Submit'></input>
                <button className="formBtn" onClick={()=>setCreateBtn(false)}>Cancel</button>
            </form>
            : null
            }

        </div>
    )
}

export default TaskForm