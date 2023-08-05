<template>
  <div>
      <div v-for="(product, index) in products" :key="index" class="flex justify-center ">
        <div v-if="product.mount > 0" class="flex">
          <img class="h-64 grid-cols-6 pr-96 " :src="product.image_path" alt="" />
          <div class="block h-full">
            <h1>{{ product.product_name }}</h1>
            <p>數量:{{ product.mount }}</p>
            <p>價格:{{ product.price }}</p>
          </div>
        </div>
        <SideBar></SideBar>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <div class="pr-24 text-2xl">總計:{{calculateTotal()}}</div>
      <button class="bg-black text-white rounded-2xl w-24" @click="clear()"><h3 class="text-2xl">結帳</h3></button>
    </div>
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