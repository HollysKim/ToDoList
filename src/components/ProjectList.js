import React, {useState} from "react"

const ProjectList = ({setProjectClicked, projectList, setProjectSelected}) => {

    const chooseProject = (id) => {
        setProjectClicked(true)
        setProjectSelected(id)
    }
    return(
        <div className="project-container">
            {projectList.map(projects =>
                <div key={projects.id}>
                    <h2 className="project" key={projects.id} onClick={()=>chooseProject(projects.id)}>{projects.name}</h2>
                </div>
                )
            }
        </div>
    )
}

export default ProjectList