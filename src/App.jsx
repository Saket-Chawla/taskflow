import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import ProgressBar from "./components/ProgressBar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [task, setTask] = useState("");

  // Tasks are now stored in localStorage
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const [search, setSearch] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Progress
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  // Search
  const filteredTasks = tasks.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">

        <Header />

        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Filter */}
        <div className="mt-4 flex justify-between items-center">
          <select className="bg-slate-800 px-4 py-2 rounded-lg">
            <option>All Tasks</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <span className="text-gray-400">
            {tasks.length} Tasks
          </span>
        </div>

        <ProgressBar progress={progress} />

        <div className="mt-8">
          <TaskList
            tasks={filteredTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>

      </div>
    </div>
  );
}

export default App;