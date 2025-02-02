import "./App.css";
import { TodoProject } from "./models/todo";
import { TodoTable } from "./components/todo/todo-table/todo-table";

function App() {
  const data: TodoProject = {
    todos: [
      {
        todo: {
          id: "1",
          title: "Todo 1",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        groupedTodos: [
          {
            id: "6",
            title: "Todo 6",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "7",
            title: "Todo 7",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "8",
            title: "Todo 8",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "9",
            title: "Todo 9",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "10",
            title: "Todo 10",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "11",
            title: "Todo 11",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "12",
            title: "Todo 12",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      },
      {
        todo: {
          id: "2",
          title: "Todo 2",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "3",
          title: "Todo 3",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "4",
          title: "Todo 4",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "5",
          title: "Todo 5",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "6",
          title: "Todo 6",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "7",
          title: "Todo 7",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "1",
          title: "Todo 1",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "2",
          title: "Todo 2",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "3",
          title: "Todo 3",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "4",
          title: "Todo 4",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "5",
          title: "Todo 5",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "6",
          title: "Todo 6",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "7",
          title: "Todo 7",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },

      {
        todo: {
          id: "1",
          title: "Todo 1",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "2",
          title: "Todo 2",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "3",
          title: "Todo 3",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "4",
          title: "Todo 4",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "5",
          title: "Todo 5",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "6",
          title: "Todo 6",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        todo: {
          id: "7",
          title: "Todo 7",
          completed: false,
          expiresAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        groupedTodos: [
          {
            id: "6",
            title: "Todo 6",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: "7",
            title: "Todo 7",
            completed: false,
            expiresAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Todos</h1>

      <TodoTable
        headers={["Completed", "Title", "Expires At", "Updated At"]}
        todoProject={data}
      />
    </div>
  );
}

export default App;
