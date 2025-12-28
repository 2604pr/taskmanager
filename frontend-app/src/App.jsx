// App.jsx
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

export default function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
