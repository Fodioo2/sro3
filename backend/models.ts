type Priority = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  isDone: boolean;
  priority: Priority;
}

let nextId = 1;

function createTask(title: string, priority: Priority): Task {
  return {
    id: nextId++,
    title,
    isDone: false,
    priority
  };
}

function toggleTask(task: Task): Task {
  return {
    ...task,
    isDone: !task.isDone
  };
}

function countByPriority(tasks: Task[], priority: Priority): number {
  return tasks.filter((task) => task.priority === priority).length;
}

const tasks: Task[] = [
  createTask("Подготовить отчёт", "high"),
  createTask("Изучить TypeScript", "medium"),
  createTask("Сделать презентацию", "high"),
  createTask("Проверить почту", "low"),
  createTask("Повторить React", "medium")
];

const changedTask = toggleTask(tasks[0]);

console.log("Все задачи:", tasks);
console.log("Изменённая задача:", changedTask);
console.log("Задач с высоким приоритетом:", countByPriority(tasks, "high"));
console.log("Задач со средним приоритетом:", countByPriority(tasks, "medium"));