import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const EditTask = (({taskID, setTaskList, task}) => {
    const [editBtn, setEditBtn] = useState(false)
    const [date, setDate] = useState(new Date())
    const submitTaskForm = (event) => {
        event.preventDefault()
        const editedTask = {
            id: taskID,
            name: event.target.name.value,
            description: event.target.description.value,
            date: event.target.date.value,
            expand: false
        }
        const {description, ...editedTaskRest} = editedTask
        const copyOfEditedTask = editedTask
        const {name, ...editedTaskRest2} = copyOfEditedTask
        if(event.target.description.value == '') {
            const combinedTask = {...task, ...editedTaskRest}
            console.log(combinedTask)
            setTaskList(combinedTask, taskID)
        }
        else if(event.target.name.value == '') {
            const combinedTask = {...task, ...editedTaskRest2}
            setTaskList(combinedTask, taskID)
        }
        else {
            const combinedTask = {...task, ...editedTask}
            console.log(combinedTask)
            setTaskList(combinedTask, taskID)
        }
        setEditBtn(false)
    }

    return(
        <div>
            <button className="formBtn" onClick={()=>setEditBtn(true)}>Edit</button>
            {editBtn
            ? <form onSubmit={submitTaskForm} className="form">
                <label>Task name</label>
                <input name='name' type="text"></input>
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
                <button className="formBtn" onClick={()=>setEditBtn(false)}>Cancel</button>
            </form>
            : null
            }
        </div>
    )
})

export default EditTask
