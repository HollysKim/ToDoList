  import React, {useEffect, useState } from 'react';
  import ProjectForm from './components/ProjectForm';
  import ProjectList from './components/ProjectList';
  import Project from './components/Project';
  import TaskForm from './components/TaskForm';
  import TaskList from './components/TaskList';
  export default function App () {

    const projectsLocalStorage = JSON.parse(localStorage.getItem('project') || '[]')

    const [projectList, setProjectList] = useState(projectsLocalStorage) 
    const [projectClicked, setProjectClicked] = useState(false) 
    const [projectSelected, setProjectSelected] = useState(null)

    const handleProjectClicked = () => {
      setProjectClicked(true)
    }

    const handleProjectSelected = (id) => {
      setProjectSelected(id)
    }

    const handleProjectList = (list) => {
      setProjectList(projectList.concat(list))
      
    }

    useEffect(()=> {
      localStorage.setItem('project', JSON.stringify(projectList))
    })

    const handleTaskList = (task) => {
      const newProjectList = [...projectList]
      setProjectList(newProjectList.map(project =>
        {
            if(project.id == projectSelected) {
              const updatedTasks = project.tasks.concat(task)
              const updated = {...project, tasks: updatedTasks}
              project = updated
              return project
            }
            return project
        }
    ))
    }

    const handleEditTask = (task, taskID) => {
      setProjectList(projectList.map(project => {
        if(project.id == projectSelected) {
          const newProject = project.tasks.map(val => val = task)
          let cool
          newProject.map(val => cool = val)
          const updatedTasks = project.tasks.map(task => {
          if(task.id == taskID) {
            task = cool
            return task
          }
          return task
        })
        const updatedProject = {...project, tasks: updatedTasks}
        project = updatedProject
        return project
        }
        return project
      }))
    }

    const handleDeleteTask = (updatedTask, target) => {
      let targetProject
      target.map(val => targetProject = val)
      setProjectList(projectList.map(project => {
        if(project == targetProject) {
          const updatedProject = {...project, tasks: updatedTask}
          project = updatedProject
          return project
        }
        return project
      }))
    }

    const handleDeleteProject = (target) => {
      let t
      target.map(val => t = val)
      setProjectList(projectList.filter(project => project !== t))
      setProjectSelected(null)
    }
      


    return (
        <div className='parent-container'>
          <div className='left-container'>
            <ProjectForm  setProjectList={handleProjectList}/>
            <ProjectList setProjectClicked={handleProjectClicked} projectList={projectList} setProjectSelected={handleProjectSelected}/>
          </div>
          <div className='right-container'>
          {projectClicked
                ? projectSelected == null 
                  ? <h2 style={{color:'red'}}>No project found. Please create a new project or navigate to an existing one.</h2>
                  : <div>
                      <Project handleDeleteProject={handleDeleteProject} id={projectSelected} projectList={projectList}/>
                      <TaskForm setTaskList={handleTaskList}/>
                      <TaskList setTaskList={handleEditTask} id={projectSelected} projectList={projectList} setProjectList={handleDeleteTask}/>
                   </div>
                
                : <h1>You currently have {Object.keys(projectList).length} project(s).</h1>
            }
          </div>
        </div>
      )
  }
  