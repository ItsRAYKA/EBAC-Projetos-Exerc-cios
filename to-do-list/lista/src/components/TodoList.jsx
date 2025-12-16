import { useRecoilValue } from "recoil";
import { filteredTodosState } from "../selectors/filteredTodosSelector";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // pega o usuário logado
  const userName = localStorage.getItem("userName");

  // agora o selector é por usuário
  const tasks = useRecoilValue(filteredTodosState(userName));

  if (tasks.length === 0) {
    return (
      <p className="text-center text-zinc-500 mt-6">Nenhuma tarefa ainda.</p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
