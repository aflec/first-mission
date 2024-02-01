'use client'

// components/TaskList.js
import { useState, useEffect } from 'react';
import { getTasks } from '../controllers/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const queried = getTasks();

    if (queried.tasks !== undefined) {
      setTasks(queried.tasks);
    }
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
