<template>
    <div>
      <button @click="$store.addProduct()">Add Product</button>
    </div>
  </template>

<script>
import { useStore } from '../../store/index.ts';

export default {
  setup() {
    const $store = useStore();

    return {
      $store,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>