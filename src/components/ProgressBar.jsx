function ProgressBar({ progress }) {
  return (
    <div className="mt-8">

      <div className="flex justify-between mb-2">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-3 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressBar;