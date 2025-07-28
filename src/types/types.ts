export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
  assignedTo: string | null;
}
export type IFilter = "all" | "high" | "medium" | "low";
export interface IUser {
  name: string;
  id: string;
}
