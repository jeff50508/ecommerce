import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: (): State => ({
    status: 'empty',
  }),
  actions: {
    addProduct() {
      // 增加商品的邏輯，這裡假設我們每次增加商品數量為1
      if (typeof this.status === "string") {
        this.status = 1;
      } else {
        this.status += 1;
      }
    },
  },
});

interface State{
  status :string | number;
}