import "./App.css";
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";
import { Todo } from "./models/todo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/common/table/table";

function App() {
  const { data, isLoading } = useSWR<Todo[]>(
    "http://localhost:3000/todos",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todos</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Done</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>ExpiresAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                <input type="checkbox" checked={todo.completed} />
              </TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                {todo.expiresAt
                  ? new Date(todo.expiresAt).toLocaleDateString()
                  : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
