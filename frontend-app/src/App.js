// src/App.js
import { TaskProvider, TaskContext } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import "./style.css";

/* ---------- Filters ---------- */
function Filters() {
  const { setFilter, filter } = useContext(TaskContext);

  return (
    <div className="filters">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
        All
      </button>
      <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
        Pending
      </button>
    </div>
  );
}

/* ---------- Header with Theme Toggle ---------- */
function Header() {
  const { theme, toggleTheme } = useContext(TaskContext);

  return (
    <div className="header">
      <h1>Task Manager</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

/* ---------- App Content ---------- */
function AppContent() {
  const { theme } = useContext(TaskContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <TaskForm />
      <Filters />
      <TaskList />
    </div>
  );
}

/* ---------- App Wrapper ---------- */
export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}
