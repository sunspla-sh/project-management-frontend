// src/components/AddTask.js

import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


function AddTask(props) {

  const { refreshProject, projectId } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description, projectId };

    axios
      .post(`${API_URL}/api/tasks`, body)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        refreshProject();
      })
      .catch((error) => console.log(error));


  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
