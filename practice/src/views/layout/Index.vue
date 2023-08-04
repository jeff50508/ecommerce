<template>
    <div class="flex h-screen items-center justify-center">
      <div class="p-6 rounded shadow-md w-96" style="background-color: #08c384;">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <div class="mb-4">
          <label for="username" class="block font-bold mb-1">Username:</label>
          <input type="text" id="username" v-model="username" class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block font-bold mb-1">Password:</label>
          <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border rounded" />
        </div>
        <button @click="handleLogin" class="bg-black text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // 獲取帳號和密碼
        const { username, password } = this;
        
        // 簡單檢查帳號和密碼是否不為空
        if (username !== '' && password !== '') {
          // 登入成功，導向 /products 頁面
          this.$router.push('/products');
        } else {
          // 登入失敗，這裡可以添加錯誤提示或其他處理
          console.log('請輸入帳號和密碼');
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  // 這裡放置你的樣式，與你之前的樣式相同
  </style>