import React from "react";
import EditTask from "./EditTask";

const TaskList = ({setTaskList, id, projectList, setProjectList}) => {
    const target = projectList.filter(project => project.id == id)
    const deleteTask = (id) => {
        const updatedTasks = target.map(val => val.tasks.filter(task => task.id !== id))
        updatedTasks.map(val => setProjectList(val, target))
    }
    const expandList = (id) => {
        const taskExpand = target.map(val => val.tasks.filter(task => task.id == id))
        const updatedTaskExpand = taskExpand.map(val => val.map(val => val.expand = !val.expand))
        setProjectList(taskExpand, updatedTaskExpand)
    }

    return(
        <div>
            <h2>Tasks</h2>
            <h3>Click on a task to expand its contents.</h3>
          {target.map(value =>
                <div className="container" key={value.id}>{
                    value.tasks.map(task => 
                        <div className="subcontainer" key={task.id}>
                            <p onClick={()=>expandList(task.id)} className="task"> {task.name} </p>
                            {task.expand
                            ? <div className="task-subcontainer">
                                <p>{task.description}</p>
                                <p>{task.date}</p>
                            </div>
                            : null
                            }
                            <button className="formBtn" onClick={()=>deleteTask(task.id)}>Delete</button>
                            <EditTask taskID={task.id} setTaskList={setTaskList} task={task}/>
                        </div>
                    )
                }</div>
                )
            }
        </div>
    )
}

export default TaskList