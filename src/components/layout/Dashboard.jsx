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

import { motion } from "framer-motion";

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
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
          >
            <Card>
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
          </motion.div>
        );
      })}
    </section>
  );
}

export default Dashboard;