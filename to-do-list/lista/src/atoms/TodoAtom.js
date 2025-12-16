import { atomFamily } from "recoil";

export const todoListState = atomFamily({
  key: "todoListState",

  default: [],

  effects_UNSTABLE: (userName) => [
    ({ setSelf, onSet }) => {
      const storageKey = `tasks_${userName}`;

      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setSelf(JSON.parse(saved));
      }

      onSet((newValue) => {
        localStorage.setItem(storageKey, JSON.stringify(newValue));
      });
    },
  ],
});
