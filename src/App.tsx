import { TaskForm } from './components/TaskForm';
import { Header } from './components/Header';
import { TaskArea } from './components/TaskArea';
import { useState } from 'react';
import styles from "./App.module.css";
import './global.css';

interface Task {
  createdAt: Date;
  complete?: false | boolean;
  content: string;
}

export function App() {

  const [listTasks, setListTasks] = useState(Array<Task>);

  function toggleStatusTask(createdAt: Date) {
    const listWithToggledStatusTask = listTasks.map((task) => {
      if(task.createdAt === createdAt) {
        task.complete = !task.complete;
      }
      return task;
    }); 
    setListTasks(listWithToggledStatusTask);
  }

  function createNewTask(content: string) {
    setListTasks([...listTasks, { complete: false, content, createdAt: new Date() }])
  }

  function removeTask(createdAt: Date) {
    const listTasksWithoutOneRemoved = listTasks.filter((task)=>task.createdAt!==createdAt);
    setListTasks(listTasksWithoutOneRemoved);
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <TaskForm createNewTask={createNewTask} />
        <TaskArea listTasks={listTasks} removeTask={removeTask} toggleStatusTask={toggleStatusTask}/>
      </main>
    </div>
  )
}