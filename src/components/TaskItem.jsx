function TaskItem({ item, toggleComplete, deleteTask }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center">

      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
          className="w-5 h-5"
        />

        <span
          className={`${
            item.completed
              ? "line-through text-gray-500"
              : ""
          }`}
        >
          {item.text}
        </span>

      </div>

      <button
        onClick={() => deleteTask(item.id)}
        className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg transition"
      >
        🗑
      </button>

    </div>
  );
}

export default TaskItem;