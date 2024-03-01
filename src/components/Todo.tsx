// import React from "react";

const Todo: React.FC<{ item: string }> = ({ item }) => {
  return (
    <li className="todo-item">
      <p>{item}</p>
      <p className="remove">remove</p>
    </li>
  );
};

export default Todo;
