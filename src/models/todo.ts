export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
export type GroupedTodo = {
  [key: string]: Todo[];
};

export type TodoDetail = {
  todo?: Todo;
  groupedTodos?: Todo[];
};

export type TodoProject = {
  todos: TodoDetail[];
};
