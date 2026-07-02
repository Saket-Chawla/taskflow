import { ClipboardList } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
          <ClipboardList className="text-white" size={30} />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            TaskFlow
          </h1>

          <p className="text-muted-foreground">
            Organize your work smarter.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <div className="rounded-xl border px-5 py-3">
          <p className="text-sm text-muted-foreground">
            Today
          </p>

          <p className="font-semibold">
            {today}
          </p>
        </div>

        <ThemeToggle />

      </div>

    </header>
  );
}

export default Header;