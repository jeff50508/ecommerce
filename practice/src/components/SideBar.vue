<template>
  <div class="flex h-full">
    <!-- 側邊欄 -->
    
    <div  class="rounded-l-3xl mt-96  bg-gray-200 h-1/3 px-4 py-8 fixed top-0 right-0 transition-all duration-300">
      <!-- 側邊欄內容 -->
      <div v-for="(product, index) in products" :key="index">
        <div v-if="product.mount > 0">
          <p>{{ product.product_name }} ({{ product.mount }})</p>
          <p>${{ product.price * product.mount}}</p>
        </div>
      </div>
      <router-link to = "/checkout">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-8 text-white border rounded bg-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>

      </router-link>
    </div>
    <!-- 主內容 -->

    <!-- 切換按鈕 -->
    <!-- <button @click="toggleSidebar" :class="{'right-64': isSidebarOpen, 'right-0': !isSidebarOpen}" style="background-color: #08c384;" class="fixed top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow">
      <i :class="{'fa-arrow-right': isSidebarOpen, 'fa-arrow-left': !isSidebarOpen}" class="fas fa-arrow-right"></i>
    </button> -->
  </div>
  
</template>

<script>
import { useStore } from '../store/index.ts';
export default {
  setup() {
    const store = useStore();
    const products = store.products;
    // let isSidebarOpen = false; // Initialize isSidebarOpen to false

    // const toggleSidebar = () => {
    //   isSidebarOpen = !isSidebarOpen; // Toggle the value of isSidebarOpen
    // };

return {
  products,
  // isSidebarOpen, // Expose isSidebarOpen to the template
  // toggleSidebar, // Expose the toggleSidebar function to the template
};
  }
  
};

</script>

<style lang="scss" scoped>

</style>