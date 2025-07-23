import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const addTaskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(addTaskData);
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
