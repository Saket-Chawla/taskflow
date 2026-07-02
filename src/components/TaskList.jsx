import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleComplete,
  deleteTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 text-center text-gray-400">
        No tasks yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;