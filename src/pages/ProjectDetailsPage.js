// src/pages/ProjectDetailsPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";

const API_URL = process.env.REACT_APP_API_URL;

function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  const getProject = () => {          //  <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {                   // <== ADD AN EFFECT
    getProject();
  }, [] );

  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      <AddTask  refreshProject={getProject} projectId={projectId} />
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
      ))}
      
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
