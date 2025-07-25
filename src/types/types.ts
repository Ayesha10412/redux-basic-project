export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignedTo: string | null;
}
export type IFilter = "all" | "High" | "Medium" | "Low";
export interface IUser {
  name: string;
  id: string;
}
