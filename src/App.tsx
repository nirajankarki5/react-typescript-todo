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

  const removeItems = (id: string) => {
    console.log(id);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="container">
      <h1>TODO VITE APP</h1>
      <NewTodo addItems={addItems} />
      <Todos items={items} removeItems={removeItems} />
    </div>
  );
}

export default App;
