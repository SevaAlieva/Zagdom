<template>
  <div class="root">
    <Header />
    <main class="main-content">
      <NuxtPage />
      <h1>Hello, world!</h1>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 40px 88px;
}
</style>