import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, text: "Sample Todo", completed: false }],
  addTodo : (todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
  editTodo: (id, newText) => {},
  isLoading: false,
  error: null,
});

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = TodoContext.Provider