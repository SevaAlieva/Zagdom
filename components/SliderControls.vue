<script setup lang="ts">
import { useSwiper } from 'swiper/vue'
const swiper = useSwiper()
</script>

<template>
  <div class="slider-controls">
    <button 
      class="slider-button prev" 
      @click="swiper.slidePrev()"
      aria-label="Previous slide"
    >
      <
    </button>
    <div class="pagination">
      <button
        v-for="(slide, index) in swiper.slides"
        :key="index"
        @click="swiper.slideTo(index)"
        :class="{ active: swiper.activeIndex === index }"
        :title="`Открыть ${index + 1} слайд`"
      >
        {{ index + 1 }}
      </button>
    </div>
    <button 
      class="slider-button next" 
      @click="swiper.slideNext()"
      aria-label="Next slide"
    >
      >
    </button>
  </div>
</template>

<style lang="scss">
.slider-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 10;
}

.slider-button {
  color: white;
  font-size: 1.5rem;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.4);
  }
}

.pagination {
  display: flex;
  gap: 10px;
  
  button {
    color: white;
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &.active {
      background: var(--green);
    }
    
    &:hover:not(.active) {
      background: rgba(255,255,255,0.4);
    }
  }
}
</style>