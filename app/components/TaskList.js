'use client'

// components/TaskList.js
import { useState, useEffect } from 'react';
// import { getTasks } from '../controllers/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
      .then(({data}) => setTasks(data));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;
