import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectsSideBar from "./components/projectsSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  });
function handleAddtask(text){
  setProjectsState(prevState=>{
    const taskId=Math.random()
    const newTask={
      text:text,
      projectId:prevState.selectedProjectId,
      id:taskId
    };
    return{
      ...prevState,
      selectedProjectId:undefined,
      tasks:[newTask,...prevState.tasks]
    }
  })
  
} 
function handleDeleteTask(id){
  setProjectsState((prevState)=>{
    return{
      ...prevState,
     
      tasks:prevState.tasks.filter(
        (task)=>task.id !==id
    
    )
    }
  })

}

    function handleSelectedProject(id){
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId:id,
        };
      });
    }
    function handleDeleteProject(){
      setProjectsState((prevState)=>{
        return{
          ...prevState,
          selectedProjectId:undefined,
          projects:prevState.projects.filter((project)=>project.id !==prevState.selectedProjectId
        
        )
        }
      })
    }

  function handlestartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
 function handleCancelAddproject(){
  setProjectsState((prevState)=>{
    return {
      ...prevState,
      selectedProjectId:undefined
    }
  })
 }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const projectId=Math.random()
      const newproject={
        ...projectData,
        id:projectId
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newproject]
      }
    })
  }
  const selectedProject=projectsState.projects.find(project=> project.id === projectsState.selectedProjectId)
  let contents=<SelectedProject 
  project={selectedProject}
   onDelete={handleDeleteProject}
   OnAddTask={handleAddtask}
   onDeletetask={handleDeleteTask}
   tasks={projectsState.tasks}
   />;
  if (projectsState.selectedProjectId === null) {
    contents = <NewProject  onAdd={handleAddProject}
    onCancel={handleCancelAddproject}
    />;
  } else if (projectsState.selectedProjectId === undefined) {
    contents = <NoProject onStartAddProject={handlestartAddProject} />;

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddproject={handlestartAddProject} 
      projects={projectsState.projects}
      onSelecteProject={handleSelectedProject}
      />
      {contents}
    </main>
  );
}

export default App;
