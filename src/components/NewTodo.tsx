import { useRef } from "react";
import Todo from "../models/todo";

// accepting function as props that has Todo type as argument and returns void
const NewTodo: React.FC<{ addItems: (todo: Todo) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = inputRef.current?.value;
    if (text) {
      props.addItems(new Todo(text));
      inputRef.current.value = "";
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="New todo..." ref={inputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
