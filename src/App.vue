<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
@import './assets/base.css';
body {
  background-color: var(--vt-c-dark-grey);
}
</style>
