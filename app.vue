<template>
  <div class="root">
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style lang="scss">
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 40px 88px;

  @include for-tablet-portrait-up {
    padding: 30px 40px;
  }

  @include for-phone-only {
    padding: 20px;
  }
}
</style>