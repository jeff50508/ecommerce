import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
  state: (): State => ({
    status: 'empty',
    products: [], // Add the products array to the state
    cart: [] as Product[],
  }),
  getters: {
    // uniqueProducts(state) {
    //   const uniqueProductsMap = new Map();

    //   // Calculate the quantity of each product
    //   state.cart.forEach((product) => {
    //     const { product_name, price } = product;
    //     const key = `${product_name}_${price}`;
    //     if (uniqueProductsMap.has(key)) {
    //       uniqueProductsMap.set(key, uniqueProductsMap.get(key) + 1);
    //     } else {
    //       uniqueProductsMap.set(key, 1);
    //     }
    //   });

    //   // Convert the map to an array of unique products with quantities
    //   const uniqueProductsArray = [];
    //   uniqueProductsMap.forEach((quantity, key) => {
    //     const [product_name, price] = key.split('_');
    //     uniqueProductsArray.push({
    //       product_name,
    //       price: parseFloat(price),
    //       quantity,
    //     });
    //   });

    //   return uniqueProductsArray;
    // },
  },
  actions: {
    
    // addProduct() {
    //   // 增加商品的邏輯，這裡假設我們每次增加商品數量為1
    //   if (typeof this.status === "string") {
    //     this.status = 1;
    //   } else {
    //     this.status += 1;
    //   }
    // },
    addToCart(product: Product) {
      // 假設購物車是一個陣列，將商品加入購物車
      this.cart.push(product);
      console.log(this.cart);
      // 將購物車內容保存到 sessionStorage 中
      // this.$pinia.persist({ path: 'cart', value: this.cart });
    },
    persist: {
      storage: sessionStorage,
      paths: ['status','cart'],
    },
    
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
});

interface State {
  status: string | number;
  products: Product[]; // Add the 'products' property to the State interface
  cart: Product[];
}

interface Product {
  id: number;
  image_url: string;
  product_name: string;
  price: number;
}

