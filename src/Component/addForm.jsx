import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/counter/todoSlice";

export default function Addform() {
  const [task, setTask] = useState("");
  const Dispatch = useDispatch();

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(task);
    Dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
