import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectsSideBar from "./components/projectsSideBar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handlestartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newproject={
        ...projectData,
        id:Math.random()
      };
      return{
        ...prevState,
        projects:[...prevState.projects,newproject]
      }
    })
  }
  let contents;
  if (projectsState.selectedProjectId === null) {
    contents = <NewProject  onAdd={handleAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    contents = <NoProject onStartAddProject={handlestartAddProject} />;

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddproject={handlestartAddProject} 
      projects={projectsState.projects}
      />
      {contents}
    </main>
  );
}

export default App;
