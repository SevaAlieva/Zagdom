<template>
  <div class="root">
    <Header />
    <main class="main-content">
      <Slider />
      <FeaturesGrid />
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Slider from '~/components/Slider.vue'
import FeaturesGrid from '~/components/FeaturesGrid.vue'
</script>

<style lang="scss">
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>