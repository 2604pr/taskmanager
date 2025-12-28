// src/components/TaskItem.jsx
import React from "react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={task.completed ? "done" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
};

export default React.memo(TaskItem);
