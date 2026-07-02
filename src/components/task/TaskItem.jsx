import { useState } from "react";
import { format } from "date-fns";

import {
  Card,
  CardContent,
} from "@/components/ui/Card";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import {
  Pencil,
  Trash2,
  CheckCircle2,
  Calendar,
  Folder,
  Flag,
} from "lucide-react";

function TaskItem({
  item,
  toggleComplete,
  deleteTask,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleSave = () => {
    if (editedText.trim() === "") return;

    editTask(item.id, {
      text: editedText,
    });

    setIsEditing(false);
  };

  const priorityColor = {
    High: "destructive",
    Medium: "secondary",
    Low: "outline",
  };

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-xl ${
        item.completed ? "opacity-70" : ""
      }`}
    >
      <CardContent className="space-y-5 p-6">

        {/* Title */}
        <div className="flex items-start justify-between gap-4">

          {isEditing ? (
            <Input
              value={editedText}
              onChange={(e) =>
                setEditedText(e.target.value)
              }
            />
          ) : (
            <div>
              <h2
                className={`text-xl font-semibold ${
                  item.completed
                    ? "line-through text-muted-foreground"
                    : ""
                }`}
              >
                {item.text}
              </h2>
            </div>
          )}

        </div>

        {/* Badges */}

        <div className="flex flex-wrap gap-3">

          <Badge variant={priorityColor[item.priority]}>
            <Flag size={14} className="mr-1" />
            {item.priority}
          </Badge>

          <Badge variant="outline">
            <Folder size={14} className="mr-1" />
            {item.category}
          </Badge>

          {item.dueDate && (
            <Badge variant="secondary">
              <Calendar size={14} className="mr-1" />
              {format(
                new Date(item.dueDate),
                "MMM dd, yyyy"
              )}
            </Badge>
          )}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-3">

          <Button
            variant={
              item.completed
                ? "secondary"
                : "default"
            }
            onClick={() =>
              toggleComplete(item.id)
            }
          >
            <CheckCircle2
              size={16}
              className="mr-2"
            />
            {item.completed
              ? "Completed"
              : "Complete"}
          </Button>

          {isEditing ? (
            <Button
              onClick={handleSave}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() =>
                setIsEditing(true)
              }
            >
              <Pencil
                size={16}
                className="mr-2"
              />
              Edit
            </Button>
          )}

          <Button
            variant="destructive"
            onClick={() =>
              deleteTask(item.id)
            }
          >
            <Trash2
              size={16}
              className="mr-2"
            />
            Delete
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}

export default TaskItem;