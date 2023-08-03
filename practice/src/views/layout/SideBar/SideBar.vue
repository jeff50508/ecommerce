<template>
  <div class="flex h-full">
    <!-- 側邊欄 -->
    <div :class="{ 'hidden': !isSidebarOpen, 'w-64': isSidebarOpen }" class="mt-96 opacity-50 bg-gray-200 h-1/3 px-4 py-8 fixed top-0 right-0 transition-all duration-300">
      <!-- 側邊欄內容 -->
      <!-- {{ $store.cart }} -->
      <!-- <button @click="handleCart"  style="background-color: #08c384;">
        Cart ({{ store.cart }})
      </button> -->
      <!-- 可以添加其他側邊欄內容 -->
      <div v-for="(product, index) in uniqueProducts" :key="index">
        <p>{{ product.product_name }} ({{ product.quantity }})</p>
        <p>{{ product.price }}</p>
        <button @click="cartStore.incrementQuantity(product)">+</button>
        <button @click="cartStore.decrementQuantity(product)">-</button>
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
    data() {
    return {
      isSidebarOpen: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    // handleCart() {
    //   this.$router.push('/checkout');
    // }
    // incrementQuantity(product) {
    //   // Assuming you have an 'updateCartItemQuantity' mutation in your store
    //   cartStore.('updateCartItemQuantity', { ...product, quantity: product.quantity + 1 });
    // },
    // decrementQuantity(product) {
    //   if (product.quantity > 0) {
    //     // Assuming you have an 'updateCartItemQuantity' mutation in your store
    //     this.$store.commit('updateCartItemQuantity', { ...product, quantity: product.quantity - 1 });
    //   }
    // },
  },
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
        const { product_name, price } = product;
        const key = `${product_name}_${price}`;
        if (uniqueProductsMap.has(key)) {
          uniqueProductsMap.set(key, uniqueProductsMap.get(key) + 1);
        } else {
          uniqueProductsMap.set(key, 1);
        }
      });

      // Convert the map to an array of unique products with quantities
      const uniqueProductsArray = [];
      uniqueProductsMap.forEach((quantity, key) => {
        const [product_name, price] = key.split('_');
        uniqueProductsArray.push({
          product_name,
          price: parseFloat(price),
          quantity,
          
        });
      });

      return uniqueProductsArray;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>