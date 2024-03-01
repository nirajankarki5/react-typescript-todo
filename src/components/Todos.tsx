import TodoModel from "../models/todo";
import Todo from "./Todo";

const Todos: React.FC<{
  items: TodoModel[];
  removeItems: (id: string) => void;
}> = (props) => {
  return (
    <ul className="todos">
      {props.items.map((item) => (
        <Todo
          key={item.id}
          item={item.text}
          id={item.id}
          removeItems={props.removeItems}
        />
      ))}
    </ul>
  );
};

export default Todos;
