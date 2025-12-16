import { memo } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/TodoAtom";

const TodoItem = ({ task }) => {
  // pega o usuário logado
  const userName = localStorage.getItem("userName");

  // atom agora é por usuário
  const setTasks = useSetRecoilState(todoListState(userName));

  // marca / desmarca
  const toggleTask = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // remove
  const removeTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <li className="flex items-center justify-between bg-white border border-zinc-300 rounded-lg px-3 py-2 shadow-sm hover:shadow transition mb-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleTask}
          className="w-4 h-4 accent-zinc-900 cursor-pointer"
        />

        <span
          className={
            task.completed ? "line-through text-zinc-400" : "text-zinc-800"
          }
        >
          {task.text}
        </span>
      </label>

      <button
        onClick={removeTask}
        className="text-red-500 hover:text-red-700 text-sm transition"
      >
        Remover
      </button>
    </li>
  );
};

export default memo(TodoItem);
