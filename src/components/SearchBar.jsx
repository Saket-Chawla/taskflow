function SearchBar({ search, setSearch }) {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;