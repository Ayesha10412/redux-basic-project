import type { RootState } from "@/redux/store";
import type { IFilter, ITask } from "../../../types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface InitialState {
  tasks: ITask[];
  filter: IFilter;
}
const initialState: InitialState = {
  tasks: [],
  filter: "all",
};
type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createTask = (taskData: DraftTask): ITask => {
  return { id: uuid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log("Deleted:", action);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  }
  return state.todo.tasks;
};
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
