import type { IUser } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  users: IUser[];
}
const initialState: InitialState = {
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<IUser>) => {
      state.users.push(actions.payload);
    },
  },
});
export const selectUsers = (state: { user: InitialState }) => state.user.users;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
