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
  todo: TodoDetail;
};
const TodoTableRow = ({ todo }: TodoTableRowProps) => {
  const { groupedTodos, todo: t } = todo;
  if (t) {
    return <IndependentTodoRow todo={t} />;
  }
  if (groupedTodos) {
    return <GroupedTodoRow todos={groupedTodos} />;
  }
};

type IndependentTodoRowProps = {
  todo: Todo;
  isParent?: boolean;
  isGrouped?: boolean;
};
const IndependentTodoRow = ({ todo, isGrouped }: IndependentTodoRowProps) => {
  const [value, setValue] = useState(todo.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <TableCell
        style={{
          width: 50,
          ...(isGrouped && { borderLeft: "3px solid black" }),
        }}
      >
        <input type="checkbox" checked={todo.completed} />
      </TableCell>
      <TableCell>
        <Text value={value} onChange={handleChange} />
      </TableCell>
      <TableCell style={{ width: 150 }}>
        {todo.expiresAt ? new Date(todo.expiresAt).toLocaleDateString() : ""}
      </TableCell>
      <TableCell
        style={{
          width: 150,
          ...(isGrouped && { borderRight: "3px solid black" }),
        }}
      >
        {new Date(todo.updatedAt).toLocaleTimeString()}
      </TableCell>
    </>
  );
};

type GroupedTodoRowProps = {
  todos: Todo[];
};
const GroupedTodoRow = ({ todos }: GroupedTodoRowProps) => {
  return (
    <>
      {todos.map((todo) => (
        <IndependentTodoRow key={todo.id} todo={todo} isGrouped />
      ))}
    </>
  );
};

type TodoTableProps = {
  headers: string[];
  todoProject: TodoProject;
};
export function TodoTable({ headers, todoProject }: TodoTableProps) {
  return (
    <TableVirtuoso
      style={{ height: 400, width: 1000 }}
      // trの代わりにReact.Fragmentを使うと正常に描画されない
      // https://github.com/petyosi/react-virtuoso/issues/1012
      // components={{
      //   TableRow: React.Fragment,
      // }}
      data={todoProject.todos}
      fixedHeaderContent={() => <TodoTableHeader headers={headers} />}
      itemContent={(_, todo) => <TodoTableRow todo={todo} />}
    />
  );
}
