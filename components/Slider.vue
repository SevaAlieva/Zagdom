<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  <div class="slider-container">
    <Swiper
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
            <source :srcset="`${slide.image_portrait.x2} 2x`">
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
    </Swiper>
  </div>
</template>

<style lang="scss">
.slider-container {
  padding: 40px 88px 0;
  padding-left: 88px;
  padding-right: 88px;

  @include for-phone-only {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.slider {
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 120px;
  height: 450px;

  @include for-phone-only {
    margin-bottom: 80px;
    height: 400px;
  }
}

.slider-figure {
  position: relative;
  height: 100%;
  margin: 0;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 5;
  }
}

.slider-figure-picture {
  display: block;
  width: 100%;
  height: 100%;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 30px;
}

.slider-figure-caption {
  position: absolute;
  bottom: 113px;
  left: 144px;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 460px;

  @include for-phone-only {
    bottom: 30px;
    left: 24px;
    right: 24px;
  }
}

.slider-wrapper {
  margin-left: -88px;
  margin-right: -88px;
  overflow: hidden;

  @include for-phone-only {
    margin-left: -20px;
    margin-right: -20px;
  }
}

.slider-title {
  font-family: var(--font);
  font-weight: 700;
  font-size: 46px;
  line-height: 120%;

  @include for-phone-only {
    font-size: 30px;
  }
}

.slider-text {
  font-family: var(--main-font);
  font-size: 16px;
  line-height: 135%;
}

.swiper-slide {
  overflow: hidden;
  border-radius: 30px;
}

.swiper-pagination-bullet {
  background-color: #C6C6C6;
  opacity: 1;
  margin: 0 12px;
  width: 12px;
  height: 12px;

  &-active {
    background-color: #03B766;
  }
}

.swiper-button-next,
.swiper-button-prev {
  background-color: #03B766;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 10px;

  &::after {
    font-size: 20px;
    font-weight: bold;
  }
}

@media (max-width: 824px) {
  .swiper-pagination,
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

.swiper {
  overflow: hidden;
}
</style>