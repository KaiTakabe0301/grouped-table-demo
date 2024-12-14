import { useState } from "react";
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
export function TodoTableHeader({ headers }: TodoTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((header) => (
          <TableHead key={header}>{header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}

type TodoTableRowProps = {
  todo: Todo;
};
export function TodoTableRow({ todo }: TodoTableRowProps) {
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
      console.log("PUT successful");
      mutate("http://localhost:3000/todos");
    } else {
      console.log("PUT failed");
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
}

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
