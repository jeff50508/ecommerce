<template>
  <div>
      <div class="flex" v-for="(product, index) in products" :key="index">
        <div v-if="product.mount > 0">
          <img class="h-64 grid-cols-6" :src="product.image_path" alt="" />
          <div class="grid-cols-4">
            <h1>{{ product.product_name }}</h1>
            <p>數量:{{ product.mount }}</p>
            <p>價格:{{ product.price }}</p>
          </div>
        </div>
        <SideBar></SideBar>
      </div>
    </div>
    <div>總計:{{calculateTotal()}}</div>
    <button @click="clear()">結帳</button>
</template>

<script lang="ts" setup>
import { useStore } from '../../store/index.ts';

  const store = useStore();
  const products = store.products;

  function clear ()  {
    store.$patch({status :"clear"})
  }
  const calculateTotal = () => {
  let total = 0;
  products.forEach((product) => {
    // console.log(product.amount.value)
    if (product.mount>0) {
      total += product.mount * product.price;
      console.log(total)
    }
  });
  return total;
};

</script>

<style lang="scss" scoped>

</style>