//import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
//import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
//import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types/types";
export default function Tasks() {
  // const tasks = useAppSelector(selectTasks);
  // console.log(tasks);
  // const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  console.log({ data, isLoading, isError });

  if (isLoading) {
    <p>Loading.......</p>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-center text-black font-bold text-2xl mt-3">
          Tasks
        </h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("High"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("Medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("Low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 px-5 mt-20">
        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}
