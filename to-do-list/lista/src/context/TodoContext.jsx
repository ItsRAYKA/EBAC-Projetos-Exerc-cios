import { createContext, useContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//Cria a "caixa" compartilhada
const TodoContext = createContext();

// Atalho para usar a caixa
export const useTodos = () => useContext(TodoContext);

//Provider = quem entrega os valores para os componentes filhos
export const TodoProvider = ({ children, userName }) => {
  //Nome da chave no localStorage
  const storageKey = userName ? `tasks_${userName}` : "tasks_guest";

  //Lista de tarefas guardadas no localStorage
  const [tasks, setTasks] = useLocalStorage(storageKey, []);

  //Filter atual (all, completed, pending)
  const [filter, setFilter] = useState("all");

  //Adiciona nova tarefa
  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };
  //Marca/desmarca tarefa
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  //Remove tarefa
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  //Muda o filtro
  const changeFilter = (newFilter) => setFilter(newFilter);

  //Lista já filtrada
  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks; // all
  }, [tasks, filter]);

  //Valores que o context vai fornencer
  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      filter,
      addTask,
      toggleTask,
      removeTask,
      changeFilter,
    }),
    [tasks, filter]
  );
  //Entrega o contexto para os filhos
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
