import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function TaskForm({ taskData, setTaskData, addTask }) {
  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">
          Add New Task
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="space-y-5">

          {/* Task Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Task Name
            </label>

            <Input
              name="text"
              placeholder="Enter your task..."
              value={taskData.text}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {/* Priority */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Priority
              </label>

              <select
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                name="category"
                value={taskData.category}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Personal</option>
                <option>Study</option>
                <option>Work</option>
                <option>Gym</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Due Date
              </label>

              <Input
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </div>

          </div>

          <Button
            onClick={addTask}
            className="w-full"
          >
            Add Task
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}

export default TaskForm;