<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import SliderControls from './SliderControls.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref } from 'vue'

const swiperEl = ref()
const modules = [Navigation, Pagination]

const slides = [
  {
    image_portrait: {
      x1: '/images/slide-1-portrait.jpg',
      x2: '/images/slide-1-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/images/slide-1-landscape.jpg',
      x2: '/images/slide-1-landscape@2x.jpg'
    },
    title: 'Проектируем и строим загородные дома',
    text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений'
  },
  {
    image_portrait: {
      x1: '/images/slide-2-portrait.jpg',
      x2: '/images/slide-2-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/images/slide-2-landscape.jpg',
      x2: '/images/slide-2-landscape@2x.jpg'
    },
    title: 'Дизайн-проект бесплатно',
    text: 'Для территорий до 300м²'
  },
  {
    image_portrait: {
      x1: '/images/slide-3-portrait.jpg',
      x2: '/images/slide-3-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/images/slide-3-landscape.jpg',
      x2: '/images/slide-3-landscape@2x.jpg'
    },
    title: 'Работаем уже 10 лет',
    text: 'Для вашего комфорта'
  }
]
</script>

<template>
  <Swiper 
    ref="swiperEl" 
    :modules="modules"
    :navigation="true" 
    :pagination="{ clickable: true }" 
    :loop="true"
    class="slider"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <figure class="slider-figure">
        <picture class="slider-figure-picture">
          <source
            :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
            media="(min-width: 768px)"
          >
          <source :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`">
          <img
            :src="slide.image_portrait.x1"
            class="slider-image"
            :alt="slide.title"
          >
        </picture>
        <figcaption class="slider-figure-caption">
          <h3 class="slider-title">{{ slide.title }}</h3>
          <p class="slider-text">{{ slide.text }}</p>
        </figcaption>
      </figure>
    </SwiperSlide>
    <SliderControls :swiper="swiperEl?.swiper" />
  </Swiper>
</template>

<style scoped>
.slider {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 120px;
  margin-top: 40px;
}

.slider-figure {
  position: relative;
}

.slider-image {
  height: 450px;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.slider-figure::before {
  border-radius: 30px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  z-index: 4;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.slider-figure-caption {
  position: absolute;
  bottom: 113px;
  left: 144px;
  right: 144px;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 450px;
}

.slider-title {
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-family: "Montserrat";
  font-size: 46px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
}

.slider-text {
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: 0%;
  text-align: left;
}

.swiper-pagination {
  margin-bottom: 40px;
}

:deep(.swiper-pagination-bullet) {
  background-color: #C6C6C6;
  opacity: 1;
  margin: 0 12px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #03B766;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-color: #03B766;
  color: white;
  padding: 2px 22px;
  border-radius: 10px;
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 12px;
}

@media (max-width: 1150px) {
  .slider {
    margin-top: 24px;
    margin-bottom: 80px;
  }
  
  .slider-figure-caption {
    left: 60px;
  }
  
  .slider-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .slider {
    margin-top: 24px;
    margin-bottom: 80px;
  }
  
  .slider-figure {
    margin: 15px;
  }
  
  .slider-title {
    font-size: 30px;
    width: 400px;
  }
  
  .slider-text {
    width: 300px;
  }
  
  :deep(.swiper-pagination) {
    display: none;
  }
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}
@media (max-width: 514px) {
  .slider-figure-caption {
    bottom: 43px;
    left: 28px;
  }
  
  .slider-title {
    font-size: 30px;
    width: 300px;
  }
  
  .slider-text {
    width: 250px;
  }
}

</style>