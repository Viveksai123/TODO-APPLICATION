import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/addtask';
import Footer from './Footer';
import About from './components/about';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = () => {
      const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(tasksFromStorage);
    };
    getTasks();
  }, []);

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleRemainder = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, remainder: !task.remainder } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task, completed: false };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header press={() => setShowForm(!showForm)} openClose={showForm} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showForm && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks array={tasks} onDelete={deleteTask} onToggleRemainder={toggleRemainder} onToggleCompleted={toggleCompleted} />
                ) : (
                  'No tasks to show'
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
