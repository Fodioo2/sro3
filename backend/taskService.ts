export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  isDone: boolean;
  priority: Priority;
}

let nextId = 1;

export function createTask(title: string, priority: Priority): Task {
  return {
    id: nextId++,
    title,
    isDone: false,
    priority
  };
}

export function toggleTask(task: Task): Task {
  return {
    ...task,
    isDone: !task.isDone
  };
}