'use client'
import { Task } from './Task';

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
       
        <Task key={task._id} task={task} deletarTarefa={props.deletarTarefa}/>
      ))}
    </ul>
  );
};

export default TaskList;
