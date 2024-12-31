import { useSelector } from "react-redux";
import Addform from "./addForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markasDone } from "../features/counter/todoSlice";

export default function Todo() {
  const Todos = useSelector((state) => state.todos);
  console.log(Todos);
  const Dispatch = useDispatch();

  let handleDeletion = (id) => {
    console.log(id);
    Dispatch(deleteTodo(id));
  };

  let isDone = (id) => {
    console.log(id);
    Dispatch(markasDone(id));
  };

  return (
    <>
      <Addform />
      <h3>Todos</h3>
      <ul>
        {Todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => handleDeletion(todo.id)}>Delete</button>
            <button onClick={() => isDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
