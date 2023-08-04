<template>
  <div>
    <SideBar></SideBar>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-4 w-full">
        <div v-for="product in store.products" :key="product.id" class="h-50 w-50 border p-4 flex flex-col">
            <SingleProduct 
              :product-image="product.image_path" 
              :product-price="product.price" 
              :product-name="product.product_name">
            </SingleProduct>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>

import { useStore } from '../../store/index.ts';
import SideBar from '../../views/layout/SideBar/SideBar.vue';
import SingleProduct from '../../components/SingleProduct.vue'
const store = useStore();
store.plus();
store.reduce();

const sampleData = [
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
    product_name:"grrge",
    price:2333
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"grrge",
    price:2333
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"grrge",
    price:2333
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"grrge",
    price:2333
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"grrge",
    price:2333
  },];

console.log("sampleData: ", sampleData);
 
store.$patch({
  'products': sampleData
})

// const addToCart = () => {

//   store.addToCart(product);

// }

 

 

// export default {

//   components: {

//     SideBar,

//   },

//   setup() {

//     const store = useStore();

//     const cartItems = store.cart;

//     // Fetch products on mount

//     store.fetchProducts();

 

//     function addToCart(product) {

//       store.addToCart(product);

//     }

   

//     return {

//       addToCart,

//       products: store.products,

//     };

//   },

// };

</script>

<style lang="scss" scoped>
/* Your CSS styles here */
</style>
<!-- <template>
  <div>
    <SideBar></SideBar>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-4 w-full">
        <div v-for="product in products" :key="product.id" class="h-50 w-50 border p-4 flex flex-col">
          <img class="h-30 w-30" :src="product.image_path" alt="Product Image" />
          <div class="flex justify-between h-full items-end">
            <p class="text-sm">{{ product.product_name }}</p>
            <div class="flex">
              <p class="text-lg font-bold">{{ product.price }}</p>
              <div>
                <button @click="addToCart(product)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '../../store/index.ts';
import SideBar from '../../views/layout/SideBar/SideBar.vue';

export default {
  components: {
    SideBar,
  },
  setup() {
    const store = useStore();
    const cartItems = store.cart;
    // Fetch products on mount
    // store.fetchProducts();

    function addToCart(product) {
      store.addToCart(product);
    }
    
    return {
      addToCart,
      products: store.products,
    };
  },
};
</script>

<style lang="scss" scoped>
/* Your CSS styles here */
</style> -->