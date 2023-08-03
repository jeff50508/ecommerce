<template>
  <div>
      <div class="flex" v-for="(product, index) in uniqueProducts" :key="index">
        <img class="h-64 grid-cols-6" :src="product.image_path" alt="" />
        <div class="grid-cols-4">
          <h1>{{ product.product_name }}</h1>
          <p>數量:{{ product.quantity }}</p>
          <p>價格:{{ product.price }}</p>
        </div>
        <!-- <button @click="$store.addProduct()">Add Product</button> -->
        <SideBar></SideBar>
      </div>
    </div>
    <div>總計:{{total}}</div>
  </template>

<script>
import { useStore } from '../../store/index.ts';

export default {
  computed: {
    // Get the store instance
    store() {
      return useStore();
    },
    uniqueProducts() {
      const products = this.store.cart;
      const uniqueProductsMap = new Map();

      // Calculate the quantity of each product
      products.forEach((product) => {
        const { product_name, price, image_path } = product;
        const key = `${product_name}_${price}_${image_path}`;
        if (uniqueProductsMap.has(key)) {
          uniqueProductsMap.set(key, uniqueProductsMap.get(key) + 1);
        } else {
          uniqueProductsMap.set(key, 1);
        }
      });

      // Convert the map to an array of unique products with quantities
      const uniqueProductsArray = [];
      uniqueProductsMap.forEach((quantity, key) => {
        const [product_name, price, image_path] = key.split('_');
        uniqueProductsArray.push({
          product_name,
          price: parseFloat(price),
          quantity,
          image_path,
        });
      });

      return uniqueProductsArray;
    },
    total() {
      let totalPrice = 0;
      this.uniqueProducts.forEach((product) => {
        totalPrice += product.quantity * product.price;
      });
      return totalPrice;
    },
  }
};
</script>

<style lang="scss" scoped>

</style>