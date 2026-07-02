import { ClipboardList } from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <ClipboardList size={28} />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            TaskFlow
          </h1>

          <p className="text-muted-foreground">
            Manage your day smarter.
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-card px-5 py-3 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Today's Date
        </p>

        <p className="font-semibold">
          {today}
        </p>
      </div>
    </header>
  );
}

export default Header;