function TaskForm({
  task,
  setTask,
  addTask,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        Add New Task
      </h2>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          className="flex-1 px-4 py-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg font-semibold transition"
        >
          Add
        </button>

      </div>

    </div>
  );
}

export default TaskForm;