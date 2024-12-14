import React, { useState, memo } from "react";
import { Todo } from "../../../models/todo";
import {
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
  Table,
  TableBody,
} from "../../common/table/table";
import { Text } from "../../common/text/text";
import { useSWRConfig } from "swr";

type TodoTableHeaderProps = {
  headers: string[];
};
const TodoTableHeaderComponent = ({ headers }: TodoTableHeaderProps) => {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((header) => (
          <TableHead key={header}>{header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
export const TodoTableHeader = memo(TodoTableHeaderComponent);

type TodoTableRowProps = {
  todo: Todo;
};
const TodoTableRowComponent = ({ todo }: TodoTableRowProps) => {
  const [value, setValue] = useState(todo.title);
  const { mutate } = useSWRConfig();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = async () => {
    const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: value,
      }),
    });

    if (response.ok) {
      console.log("PATCH successful");
      // 部分的な更新であれば、キャッシュを直接書き換えることも可能だが
      // ここではシンプルに全体をrefetchする
      mutate("http://localhost:3000/todos");
    } else {
      console.log("PATCH failed");
    }
  };

  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" checked={todo.completed} />
      </TableCell>
      <TableCell>
        <Text
          value={value}
          onChange={handleChange}
          onClick={() => {}}
          onBlur={handleBlur}
        />
      </TableCell>
      <TableCell>
        {todo.expiresAt ? new Date(todo.expiresAt).toLocaleDateString() : ""}
      </TableCell>
      <TableCell>{new Date(todo.updatedAt).toLocaleTimeString()}</TableCell>
    </TableRow>
  );
};

// todoが変わった時だけレンダリングするようメモ化
export const TodoTableRow = memo(
  TodoTableRowComponent,
  (prevProps, nextProps) => {
    // 比較関数: 変更がなければtrueを返してレンダリングしない
    // ここではtodo.idで同一行を識別し、タイトルや日時などの変更有無で比較
    return (
      prevProps.todo.id === nextProps.todo.id &&
      prevProps.todo.title === nextProps.todo.title &&
      prevProps.todo.completed === nextProps.todo.completed &&
      prevProps.todo.expiresAt === nextProps.todo.expiresAt &&
      prevProps.todo.updatedAt === nextProps.todo.updatedAt
    );
  }
);

type TodoTableProps = {
  headers: string[];
  todos: Todo[];
};
export function TodoTable({ headers, todos }: TodoTableProps) {
  return (
    <Table>
      <TodoTableHeader headers={headers} />
      <TableBody>
        {todos.map((todo) => (
          <TodoTableRow key={todo.id} todo={todo} />
        ))}
      </TableBody>
    </Table>
  );
}
