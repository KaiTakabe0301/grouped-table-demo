import "./App.css";
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";
import { Todo } from "./models/todo";
import { TodoTable } from "./components/todo/todo-table/todo-table";

function App() {
  const { data, isLoading } = useSWR<Todo[]>(
    "http://localhost:3000/todos",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Error</div>;

  return (
    <div>
      <h1>Todos</h1>

      <TodoTable headers={["Completed", "Title", "Expires At"]} todos={data} />
    </div>
  );
}

export default App;
