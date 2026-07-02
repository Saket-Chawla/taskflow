import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import {
  ClipboardList,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function Dashboard({ total, completed, pending }) {
  const stats = [
    {
      title: "Total Tasks",
      value: total,
      icon: ClipboardList,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <section className="mb-8 grid gap-5 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{item.title}</CardTitle>

                <div className={`rounded-xl p-3 ${item.bg}`}>
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">
                {item.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}

export default Dashboard;