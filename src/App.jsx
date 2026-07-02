import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/layout/Header";
import Dashboard from "./components/layout/Dashboard";

import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/task/TaskList";

import SearchBar from "./components/search/SearchBar";
import ProgressBar from "./components/progress/ProgressBar";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // Form State
  const [taskData, setTaskData] = useState({
    text: "",
    priority: "Medium",
    category: "Personal",
    dueDate: "",
  });

  // Search
  const [search, setSearch] = useState("");

  // Tasks
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // -----------------------------
  // Add Task
  // -----------------------------
  const addTask = () => {
    if (taskData.text.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      text: taskData.text,
      priority: taskData.priority,
      category: taskData.category,
      dueDate: taskData.dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);

    setTaskData({
      text: "",
      priority: "Medium",
      category: "Personal",
      dueDate: "",
    });
  };

  // -----------------------------
  // Delete Task
  // -----------------------------
  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  // -----------------------------
  // Toggle Complete
  // -----------------------------
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // -----------------------------
  // Edit Task
  // -----------------------------
  const editTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask }
          : task
      )
    );
  };

  // -----------------------------
  // Search
  // -----------------------------
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  // -----------------------------
  // Dashboard Stats
  // -----------------------------
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <Header />

        <Dashboard
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <TaskForm
          taskData={taskData}
          setTaskData={setTaskData}
          addTask={addTask}
        />

        <ProgressBar progress={progress} />

        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />

      </div>
    </div>
  );
}

export default App;