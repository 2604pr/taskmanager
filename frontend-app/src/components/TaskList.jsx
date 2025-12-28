import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function TaskList() {
  const { filteredTasks, toggleTask, deleteTask, setTasks } = useContext(TaskContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(filteredTasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setTasks(items); // ✅ persist order
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(p) => (
          <ul ref={p.innerRef} {...p.droppableProps}>
            {filteredTasks.map((task, i) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={i}>
                {(p) => (
                  <li ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                      className={task.completed ? "done" : ""}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span>{task.title}</span>
                    <button onClick={() => deleteTask(task.id)}>❌</button>
                  </li>
                )}
              </Draggable>
            ))}
            {p.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
