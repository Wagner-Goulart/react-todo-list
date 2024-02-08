import { useState } from "react";

interface TaskItem {
    id: number;
    task: string;
    checked: boolean;
  }
  
function useTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const todoHandler = (task: string) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task,
        checked: false,
      },
    ]);
  };

  const handleCheck = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    todoHandler,
    handleCheck,
    handleDelete,
  }
}

export { useTasks }
