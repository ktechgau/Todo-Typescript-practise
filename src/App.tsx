import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  //TS declaring this variable as a functional component
  const [todo, setTodo] = useState<string>(""); //We have defined this state as a string using TS and setting it to empty to begin with
  const [todos, setTodos] = useState<Todo[]>([]); //Here we defined an array of a type or interface. Then we set the initial state to an empty array

  const handleAdd = (e: React.FormEvent) => {
    //We have defined this event
    e.preventDefault(); //Prevent the page refreshing all the time

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); //derived from our model.ts
      setTodo(""); //makes sure our Todo field is empty each time we press Go
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
