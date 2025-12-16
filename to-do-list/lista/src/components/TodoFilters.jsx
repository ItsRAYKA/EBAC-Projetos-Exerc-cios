import { useRecoilState } from "recoil";
import { todoFilterState } from "../atoms/filterAtom";

const TodoFilters = () => {
  const userName = localStorage.getItem("userName");
  const [filter, setFilter] = useRecoilState(todoFilterState(userName));

  return (
    <div className="flex justify-center gap-3 mb-4 text-sm">
      <button
        className={
          filter === "all"
            ? "bg-zinc-900 text-white px-3 py-1 rounded"
            : "border px-3 py-1 rounded"
        }
        onClick={() => setFilter("all")}
      >
        Todas
      </button>

      <button
        className={
          filter === "completed"
            ? "bg-zinc-900 text-white px-3 py-1 rounded"
            : "border px-3 py-1 rounded"
        }
        onClick={() => setFilter("completed")}
      >
        Concluídas
      </button>

      <button
        className={
          filter === "pending"
            ? "bg-zinc-900 text-white px-3 py-1 rounded"
            : "border px-3 py-1 rounded"
        }
        onClick={() => setFilter("pending")}
      >
        Pendentes
      </button>
    </div>
  );
};

export default TodoFilters;
