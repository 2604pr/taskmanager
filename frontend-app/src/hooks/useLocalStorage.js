// hooks/useLocalStorage.js
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key)) || initial
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
