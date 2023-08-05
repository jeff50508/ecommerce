<template>
    <img class="h-30 w-30" :src="props.productImage" alt="Product Image" />
    <div class="flex justify-between h-full items-end">
      <p class="text-sm">{{ props.productName }}</p>
      <div class="flex">
        <button @click="plus()"> 
          +
        </button>
        {{ count }}
        <button @click="reduce()">
          -
        </button>
        <p class="text-lg font-bold pl-6">${{ props.productPrice }}</p>

      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../store';
const props= defineProps(['productName','productImage','productPrice','productIndex'])
const count = ref(0);
const store = useStore();

function plus () {
  if (typeof store.status === "string") {
    store.status = 1;
    count.value++;
  } else if (count.value < 10) {
    store.status += 1;
    count.value++;
  }
  store.products[props.productIndex].mount = count.value
  console.log(store.products[props.productIndex].mount)
  // store.updateProductCount(props.productIndex, count.value);
}

function reduce () {

  if (typeof store.status !== "string" && count.value > 0) {
    store.status --;
  } 
  if (store.status == 1) {
    store.status = "empty" 
  }
  if (count.value !== 0) {
    count.value--;
  }
  store.products[props.productIndex].mount = count.value
  // store.updateProductCount(props.productIndex, count.value);
}

</script>

<style lang="scss" scoped>

</style>