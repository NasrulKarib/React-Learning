import React, { useState } from "react";

import NewTodo from "./newtodo";
import Todos from "./todos";

const Home = () => {
  const dummyTodos = ["todo1", "todo2"];
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;