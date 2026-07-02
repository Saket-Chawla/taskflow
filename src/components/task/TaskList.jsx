import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleComplete,
  deleteTask,
  editTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
        <h2 className="text-xl font-semibold">
          No Tasks Found
        </h2>

        <p className="mt-2">
          Add your first task to get started 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          item={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;