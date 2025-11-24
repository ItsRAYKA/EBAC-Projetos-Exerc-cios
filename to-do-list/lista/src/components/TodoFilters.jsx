import React from "react";
import { useTodos } from "../context/TodoContext";

// impede que o componente renderize de novo sem necessidade
const TodoFilters = React.memo(() => {

  //pegamos o valor do filtro atual e a função que muda o filtro
  const { filter, changeFilter } = useTodos();

  return (
    <div className="flex justify-center gap-3 mb-4 text-sm">
      
      {/* Mostrar todas  as tarefas */}
      <button
        className={`px-3 py-1 rounded transition ${
          filter === "all"
            ? "bg-zinc-900 text-white"
            : "border border-zinc-400 hover:bg-zinc-200"
        }`}
        onClick={() => changeFilter("all")}
      >
        Todas
      </button>

      {/* Mostrar APENAS tarefas concluídas*/}
      <button
        className={`px-3 py-1 rounded transition ${
          filter === "completed"
            ? "bg-zinc-900 text-white"
            : "border border-zinc-400 hover:bg-zinc-200"
        }`}
        onClick={() => changeFilter("completed")}
      >
        Concluídas
      </button>

      {/*Mostrar APENAS tarefas pendentes */}
      <button
        className={`px-3 py-1 rounded transition ${
          filter === "pending"
            ? "bg-zinc-900 text-white"
            : "border border-zinc-400 hover:bg-zinc-200"
        }`}
        onClick={() => changeFilter("pending")}
      >
        Pendentes
      </button>
    </div>
  );
});

export default TodoFilters;
