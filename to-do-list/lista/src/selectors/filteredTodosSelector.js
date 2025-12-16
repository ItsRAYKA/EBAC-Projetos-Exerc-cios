import { selectorFamily } from "recoil";
import { todoListState } from "../atoms/TodoAtom";
import { todoFilterState } from "../atoms/filterAtom";

export const filteredTodosState = selectorFamily({
  key: "filteredTodosState",
  get:
    (userName) =>
    ({ get }) => {
      const todos = get(todoListState(userName));
      const filter = get(todoFilterState(userName));

      if (filter === "completed") {
        return todos.filter((t) => t.completed);
      }

      if (filter === "pending") {
        return todos.filter((t) => !t.completed);
      }

      return todos;
    },
});
