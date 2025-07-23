import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [
    {
      id: "c0rVGc4Q1oeOlnh0gbtmo",
      isCompleted: false,
      title: "Repudiandae minima q",
      description: "Aut labore Nam aut s",
      priority: "Low",
      dueDate: "2025-07-22T18:00:00.000Z",
    },
    {
      id: "eoJstWdbs-Cv-Oa_KYn7T",
      isCompleted: false,
      title: "Repudiandae minima q",
      description: "Aut labore Nam aut s",
      priority: "Low",
      dueDate: "2025-07-22T18:00:00.000Z",
    },
  ],
};
type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
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
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
