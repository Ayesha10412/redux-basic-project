import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCard from "@/components/module/tasks/taskCard";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-center text-black font-bold text-2xl mt-3">
          Tasks
        </h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 px-5 mt-20">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
