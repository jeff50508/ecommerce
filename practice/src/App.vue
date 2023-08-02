<script setup lang="ts">
//   import {
//   Check,
//   Delete,
//   Edit,
//   Message,
//   Search,
//   Star,
// } from '@element-plus/icons-vue'
import TopBar from "./views/layout/TopBar/TopBar.vue"
</script>

<template>
    <el-config-provider class="h-full">
        <div class="h-full container justify-center content-center items-center">
          <TopBar></TopBar>
          <router-view></router-view>
        </div>
    </el-config-provider>
</template>

<style>


</style>
