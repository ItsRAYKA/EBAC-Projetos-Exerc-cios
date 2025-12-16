import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/TodoAtom";

const TodoForm = () => {
  // estado local do input
  const [taskText, setTaskText] = useState("");

  // pega o usuário logado
  const userName = localStorage.getItem("userName");

  // agora o atom é por usuário
  const setTasks = useSetRecoilState(todoListState(userName));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === "") return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: taskText,
        completed: false,
      },
    ]);

    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-zinc-800"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-black"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TodoForm;
