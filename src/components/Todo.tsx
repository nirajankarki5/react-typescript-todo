// import React from "react";

const Todo: React.FC<{ item: string }> = ({ item }) => {
  return <li className="todo-item">{item}</li>;
};

export default Todo;
