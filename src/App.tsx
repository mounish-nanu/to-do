import React , {useState} from 'react';
import {Task} from './types';
import logo from './logo.svg';
import './App.css';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks , setTasks] = useState<Task[]>([]);
  const [text , setText] = useState<string>('');
  const handleAdd = () => {
    if (!text.trim()) return;
    const newTask : Task = {
      id : Date.now(),
      text,
      completed : false
    };
    setTasks([...tasks,newTask]);
    setText('');
  }
  const handleToggle = (id : number) => {
    setTasks(prev => 
      prev.map(t => (t.id === id ? {...t, completed: !t.completed} : t))
    );
  };

  const handleDelete = (id: number) => {
    setTasks(prev => prev.filter(t=>t.id != id));
  };
  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
      value = {text}
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      placeholder='Enter Task'
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key = {task.id}>
            {task.text}{task.completed ? "(done)" : ""}
          </li>

        ))}
      </ul>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
}

export default App;
