import React, { useState, memo } from "react";
import { Todo, TodoDetail, TodoProject } from "../../../models/todo";
import { TableRow, TableCell, TableHead } from "../../common/table/table";
import { Text } from "../../common/text/text";
import { TableVirtuoso } from "react-virtuoso";

type TodoTableHeaderProps = {
  headers: string[];
};
const TodoTableHeaderComponent = ({ headers }: TodoTableHeaderProps) => {
  return (
    <TableRow>
      {headers.map((header) => (
        <TableHead key={header}>{header}</TableHead>
      ))}
    </TableRow>
  );
};
export const TodoTableHeader = memo(TodoTableHeaderComponent);

type TodoTableRowProps = {
  todo: Todo;
};
const TodoTableRow = ({ todo }: TodoTableRowProps) => {
  return <IndependentTodoRow todo={todo} />;
};

type IndependentTodoRowProps = {
  todo: Todo;
};
const IndependentTodoRow = ({ todo }: IndependentTodoRowProps) => {
  const [value, setValue] = useState(todo.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <TableCell
        style={{
          width: 50,
          ...(todo.isGrouped && { borderLeft: "3px solid black" }),
          ...(todo.isParent && { borderTop: "3px solid black" }),
          ...(todo.isLastChild && { borderBottom: "3px solid black" }),
        }}
      >
        <input type="checkbox" checked={todo.completed} />
      </TableCell>
      <TableCell
        style={{
          ...(todo.isParent && { borderTop: "3px solid black" }),
          ...(todo.isLastChild && { borderBottom: "3px solid black" }),
        }}
      >
        <Text value={value} onChange={handleChange} />
      </TableCell>
      <TableCell
        style={{
          width: 150,
          ...(todo.isParent && { borderTop: "3px solid black" }),
          ...(todo.isLastChild && { borderBottom: "3px solid black" }),
        }}
      >
        {todo.expiresAt ? new Date(todo.expiresAt).toLocaleDateString() : ""}
      </TableCell>
      <TableCell
        style={{
          width: 150,
          ...(todo.isGrouped && { borderRight: "3px solid black" }),
          ...(todo.isParent && { borderTop: "3px solid black" }),
          ...(todo.isLastChild && { borderBottom: "3px solid black" }),
        }}
      >
        {new Date(todo.updatedAt).toLocaleTimeString()}
      </TableCell>
    </>
  );
};

type TodoTableProps = {
  headers: string[];
  todoProject: TodoProject;
};
export function TodoTable({ headers, todoProject }: TodoTableProps) {
  // こんな感じで成形すれば仮想化できる
  const todos: Todo[] = todoProject.todos.reduce<Todo[]>((acc, detail) => {
    if (detail.todo) {
      acc.push(detail.todo);
    }
    if (detail.groupedTodos) {
      detail.groupedTodos.forEach((todo, index) => {
        acc.push({
          ...todo,
          isGrouped: true,
          isParent: index === 0,
          isLastChild: index === detail.groupedTodos!.length - 1,
        });
      });
    }
    return acc;
  }, [] as Todo[]);

  return (
    <TableVirtuoso
      style={{ height: 400, width: 1000 }}
      // trの代わりにReact.Fragmentを使うと正常に描画されない
      // https://github.com/petyosi/react-virtuoso/issues/1012
      // components={{
      //   TableRow: React.Fragment,
      // }}
      data={todos}
      fixedHeaderContent={() => <TodoTableHeader headers={headers} />}
      itemContent={(_, todo) => <TodoTableRow todo={todo} />}
    />
  );
}
