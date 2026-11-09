import { createTask, toggleTask, Task } from "./taskService";

function filterDoneTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => task.isDone);
}

function sortByPriority(tasks: Task[]): Task[] {
  const order = {
    high: 1,
    medium: 2,
    low: 3
  };

  return [...tasks].sort((a, b) => order[a.priority] - order[b.priority]);
}

const task1 = createTask("Написать код", "high");
const task2 = createTask("Прочитать материал", "medium");
const task3 = createTask("Проверить сервер", "low");

const tasks: Task[] = [
  toggleTask(task1),
  task2,
  toggleTask(task3)
];

console.log("Все задачи:", tasks);
console.log("Выполненные задачи:", filterDoneTasks(tasks));
console.log("Сортировка по приоритету:", sortByPriority(tasks));