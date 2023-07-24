import React from "react";
const Project = ({handleDeleteProject, id, projectList}) => {
    const project = projectList.filter(project => project.id == id)
    const name = project.map(val => val.name)

    return(
        <div>
            <h2>Project {name}</h2>
            <button className="formBtn" onClick={()=>handleDeleteProject(project)}>Delete Project</button>
        </div>
    )
}

export default Project