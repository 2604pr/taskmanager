import { createContext, useCallback, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  // 🌙 THEME STATE (persisted)
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const addTask = useCallback((title) => {
    if (!title.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), title, completed: false }]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, [setTasks]);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter(t => t.completed);
    if (filter === "pending") return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <TaskContext.Provider
      value={{
        filteredTasks,
        addTask,
        toggleTask,
        deleteTask,
        setFilter,
        filter,
        theme,
        toggleTheme
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
