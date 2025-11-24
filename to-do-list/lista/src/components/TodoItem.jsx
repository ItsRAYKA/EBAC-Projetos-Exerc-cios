import { memo } from "react";


//Task = objeto da tarefa
//onToggle = função chamada para marcar/desmarcar checkbox 
// função chamada quando clica em remover 

const TodoItem = ({ task, onToggle, onRemove }) => {
  return (
    <li className="flex items-center justify-between bg-white border border-zinc-300 rounded-lg px-3 py-2 shadow-sm hover:shadow transition mb-2">
      
      {/* Checkbox + Texto */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="w-4 h-4 accent-zinc-900 cursor-pointer"
        />

        <span
          className={`${
            task.completed ? "line-through text-zinc-400" : "text-zinc-800"
          }`}
        >
          {task.text}
        </span>
      </label>

      {/* Botão remover */}
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-700 text-sm transition"
      >
        Remover
      </button>
    </li>
  );
};

export default memo(TodoItem);
