// components/TaskForm.jsx
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addTask(text);
      setText("");
    }}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
