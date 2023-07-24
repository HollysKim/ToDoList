import React, {useState} from "react"

const ProjectForm = ({setProjectList}) => {

    const [createBtn, setCreateBtn] = useState(false)
    const submitProjectForm = (event) => {
        event.preventDefault()
        const project = {
            id: Math.random()*100,
            name: event.target.name.value,
            tasks: []
        }
        setProjectList(project)
        setCreateBtn(false)
    }

    return(
        <div>
            <button className="createBtn" onClick={()=>setCreateBtn(true)}>Create new project</button>
            {createBtn
            ? <form className="form" onSubmit={submitProjectForm}>
                <label>Project name</label>
                <input name="name" type="text"></input>
                <input className="formBtn" type="submit" value='Submit'></input>
                <button className="formBtn" onClick={()=>setCreateBtn(false)}>Cancel</button>
            </form>
            : null
            }

        </div>
    )
}

export default ProjectForm
