import { atomFamily } from "recoil";

export const todoFilterState = atomFamily({
  key: "todoFilterState",
  default: "all", // all | completed | pending
});
