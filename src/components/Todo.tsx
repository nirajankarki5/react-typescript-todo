// import React from "react";

const Todo: React.FC<{
  item: string;
  id: string;
  removeItems: (id: string) => void;
}> = ({ item, id, removeItems }) => {
  return (
    <li className="todo-item">
      <p>{item}</p>
      <p className="remove" onClick={() => removeItems(id)}>
        remove
      </p>
    </li>
  );
};

export default Todo;
