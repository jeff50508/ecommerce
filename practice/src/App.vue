<script setup lang="ts">

import TopBar from "./components/TopBar.vue"
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
