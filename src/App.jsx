import { useState } from "react";
import { Form, List } from "./components";

export default function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo") || "[]"),
  );
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-center mt-8 mb-20 text-5xl tracking-wide">
          TODO APPLICATION
        </h1>
        <Form todo={todo} setTodo={setTodo} />
        <List todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
}
