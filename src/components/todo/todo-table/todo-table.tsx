import { Todo } from "../../../models/todo";
import {
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
  Table,
  TableBody,
} from "../../common/table/table";

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
  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" checked={todo.completed} />
      </TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>
        {todo.expiresAt ? new Date(todo.expiresAt).toLocaleDateString() : ""}
      </TableCell>
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
