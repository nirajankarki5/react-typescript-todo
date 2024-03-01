import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [items, setItems] = useState<Todo[]>([]);
  // const items: Todo[] = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addItems = (item: Todo) => {
    setItems([...items, item]);
  };

  return (
    <div className="container">
      <h1>TODO VITE APP</h1>
      <NewTodo addItems={addItems} />
      <Todos items={items} />
    </div>
  );
}

export default App;
