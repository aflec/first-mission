// pages/index.js
import TaskList from './components/TaskList';

const Home = () => {
  return (
    <div>
      <h1 className = "text-3xl">First Mission To-do List</h1>
      <TaskList />
    </div>
  );
};

export default Home;
