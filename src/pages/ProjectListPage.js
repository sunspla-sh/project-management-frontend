// src/pages/ProjectListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddProject from "../components/AddProject";

const API_URL = "http://localhost:5005";


function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {

    const storedToken = localStorage.getItem("authToken");

    return axios.get(`${API_URL}/api/projects`, { headers: { Authorization: `Bearer ${storedToken}` } })
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects()
      .then(response => setProjects(response.data))
  }, [] );

  
  return (
    <div className="ProjectListPage">
        <h1>Project List Page</h1>
        {projects.map((project) => {
          return (
            <div className="ProjectCard card" key={project._id} >
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}     
      <AddProject getAllProjects={getAllProjects} setProjects={setProjects} />
    </div>
  );
}

export default ProjectListPage;
