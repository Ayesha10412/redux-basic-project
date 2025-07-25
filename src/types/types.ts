export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}
export type IFilter = "all" | "High" | "Medium" | "Low";
export interface IUser {
  name: string;
  _id: string;
}
