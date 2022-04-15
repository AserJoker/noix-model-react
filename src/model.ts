import { defineModel } from "@noix/model";

export const demo = defineModel({
  name: "demo",
  state: {
    count: 0,
  },
  effect: {
    addCount() {
      this.setField("count", this.state.count + 1);
    },
  },
});
