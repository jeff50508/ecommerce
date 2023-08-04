<template>
  <div class="flex h-full">
    <!-- 側邊欄 -->
    <div :class="{  'w-64': isSidebarOpen }" class="mt-96 opacity-50 bg-gray-200 h-1/3 px-4 py-8 fixed top-0 right-0 transition-all duration-300">
      <!-- 側邊欄內容 -->
      <!-- {{ $store.cart }} -->
      <!-- <button @click="handleCart"  style="background-color: #08c384;">
        Cart ({{ store.cart }})
      </button> -->
      <!-- 可以添加其他側邊欄內容 -->

      <div v-for="(product, index) in products" :key="index">
        <div v-if="product.mount > 0">
          <p>{{ product.product_name }} ({{ product.mount }})</p>
          <p>{{ product.price }}</p>
        </div>
        <!-- <button @click="cartStore.incrementQuantity(product)">+</button>
        <button @click="cartStore.decrementQuantity(product)">-</button> -->
      </div>
    </div>
    <!-- 主內容 -->

    <!-- 切換按鈕 -->
    <button @click="toggleSidebar" :class="{'right-64': isSidebarOpen, 'right-0': !isSidebarOpen}" style="background-color: #08c384;" class="fixed top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow">
      <i :class="{'fa-arrow-right': isSidebarOpen, 'fa-arrow-left': !isSidebarOpen}" class="fas fa-arrow-right"></i>
    </button>
  </div>
  
</template>

<script>
import { useStore } from '../../../store/index.ts';
export default {
  setup() {
    const store = useStore();
    const products = store.products;
    

    return {
      products
    };
  }
};

</script>

<style lang="scss" scoped>

</style>