import "./App.css";
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";
import { Todo } from "./models/todo";

function App() {
  const { data, isLoading } = useSWR<Todo[]>(
    "http://localhost:3000/todos",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todos</h1>

      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Title</th>
            <th>ExpiresAt</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((todo) => (
            <tr key={todo.id}>
              <td>
                <input type="checkbox" checked={todo.completed} />
              </td>
              <td>{todo.title}</td>
              <td>
                {todo.expiresAt
                  ? new Date(todo.expiresAt).toLocaleDateString()
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
