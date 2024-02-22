'use client'

// pages/index.js
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [pageTasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json())
      .then(({data}) => setTasks(data));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const novaTask = event.target["0"].value;
    fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: novaTask})
    }).then(response => response.json())
    .then(taskPersistida => {
      setTasks([...pageTasks, taskPersistida]);
      event.target["0"].value = "";
    });
  }

  function deletarTarefa(task) {
    fetch("http://localhost:3000/api/tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    }).then(response => response.json())
    .then(deletedReturn => {
      if (deletedReturn.quantidadeDocumentosApagados > 0) {
        const filterTasks = pageTasks.filter(t => t._id !== task._id);
        setTasks(filterTasks);
      } else {
        console.error("Não foi possível excluir a task");
      }
    }); 
  }

  return (
    <div className='p-7'>
      <h1 className = "text-3xl">First Mission To-do List</h1>
      <form onSubmit={submit}>
        <input className='my-5' style = {{color: "#3d3d3d"}}/>
        <button className='mx-2.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Salvar</button>

      </form>
      <TaskList tasks={pageTasks} deletarTarefa={deletarTarefa} />
    </div>
  );
};

export default Home;
