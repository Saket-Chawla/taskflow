import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-6">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={18}
      />

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your tasks..."
        className="pl-10"
      />
    </div>
  );
}

export default SearchBar;