<template>
  <div>
    <SideBar></SideBar>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-4 w-full">
        <div v-for="product in store.products" :key="product.id" class="h-50 w-50 border p-4 flex flex-col">
            <SingleProduct 
              :product-image="product.image_path" 
              :product-price="product.price" 
              :product-name="product.product_name"
              :product-index="product.index">
            </SingleProduct>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>

import { useStore } from '../../store/index.ts';
import SideBar from '../../components/SideBar.vue';
import SingleProduct from '../../components/SingleProduct.vue'
const store = useStore();


const sampleData = [
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
    product_name:"AAA",
    price:151648,
    index:0
  },
  {
    id:3 ,
    image_path:"https://i4.momoshop.com.tw/1688448120/goodsimg/0011/571/085/11571085_R3.webp",
    product_name:"BBB",
    price:2333,
    index:1
  },
  {
    id:3 ,
    image_path:"https://i3.momoshop.com.tw/1688448120/goodsimg/0011/571/085/11571085_R2.webp",
    product_name:"CCC",
    price:48697,
    index:2
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"DDD",
    price:9665,
    index:3
  },
  {
    id:3 ,
    image_path:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578",
    product_name:"EEE",
    price:15453,
    index:4
  },];

console.log("sampleData: ", sampleData);
 
store.$patch({
  'products': sampleData
})



</script>

<style lang="scss" scoped>
/* Your CSS styles here */
</style>
