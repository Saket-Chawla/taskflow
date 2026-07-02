import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { Progress } from "@/components/ui/Progress";

function ProgressBar({ progress }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Progress</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Progress value={progress} />

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Task Completion</span>

          <span>{progress}%</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProgressBar;