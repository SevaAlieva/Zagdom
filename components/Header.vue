<template>
  <header class="header">
    <div class="_container">
      <div class="header__left">
        <div class="header__logo">
          <img src="/icons/logo.svg" alt="zagdom logo" class="header__logo-img">
          <img src="/icons/zagdom.svg" alt="zagdom" class="header__zagdom-img">
        </div>
        
        <nav class="header__menu">
          <a href="#" v-for="item in navItems" :key="item.url" class="header__menu-item">{{ item.label }}</a>
        </nav>
      </div>
      
      <div class="header__right">
        <div class="header__phone-wrapper">
          <img src="/icons/phone.svg" alt="phone icon" class="header__phone-icon">
          <a :href="`tel:${phone}`" class="header__phone-number">{{ phone }}</a>
        </div>
        <button class="header__button">
          <span class="header__button-text">Оставить заявку</span>
        </button>
        <Drawer class="header__button-burger"/>
      </div>
    </div>
  </header>
</template>

<script setup>
import Drawer from "./Drawer.vue"

const phone = '+7 (900) 900-90-90'

const navItems = [
  { url: '#projects', label: 'Реализованные проекты' },
  { url: '#news', label: 'Новости' },
  { url: '#contacts', label: 'Контакты' }
]
</script>

<style scoped lang="scss">
.header {
  padding: 24px 0px;
}

._container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4.5vw, 88px);
}

.header__left {
  display: flex;
  align-items: center;
  gap: clamp(40px, 8vw, 80px);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__logo-img {
  height: clamp(32px, 3vw, 40px);
  width: auto;
}

.header__zagdom-img {
  height: clamp(18px, 2vw, 24px);
  width: auto;
}

.header__menu {
  display: flex;
  gap: clamp(12px, 2vw, 24px);
  font-size: clamp(14px, 1.5vw, 16px);
  color: #666666;
  flex-wrap: wrap;
}

.header__menu-item {
  cursor: pointer;
  white-space: nowrap;
}

.header__right {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 24px);
}

.header__phone-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(12px, 1.5vw, 14px);
  line-height: 120%;
}

.header__phone-number {
  color: #254741;
  cursor: pointer;
  white-space: nowrap;
}

.header__phone-icon {
  width: 16px;
}

.header__button {
  background-color: #029F59;
  color: #ffffff;
  border-radius: 10px;
  padding: clamp(12px, 1.5vw, 16px) clamp(20px, 3vw, 40px);
  border: 0px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;
}

.header__button:hover {
  background: #027a47;
}

.header__button-burger {
  display: none;
}

@media (max-width: 1100px) {
  .header__menu {
    gap: 16px;
  }

  .header__button {
    padding: 14px 30px;
  }
}

@media (max-width: 955px) {
  .header__menu {
    gap: 12px; 
  }
}

@media (max-width: 850px) {
  
  .header__button {
    padding: 12px 24px;
    font-size: 14px;
  }
}

@media (max-width: 824px) {
  .header__button-burger {
    display: block;
  }

  .header__button {
    display: none;
  }

  .header__left {
    gap: 20px;
  }
}

@media (max-width: 650px) {
  .header__phone-number {
    font-size: 13px;
  }
}

@media (max-width: 520px) {
  .header__menu {
    display: none; 
  }

  .header__phone-wrapper {
    display: flex; 
  }

  .header__logo-img {
    height: 32px;
  }
}

@media (max-width: 400px) {
  .header__right {
    display: flex;
    justify-content: flex-end; 
  }

  .header__button-burger {
    display: block; 
  }

  .header__logo-img {
    height: 28px;
  }
  .header__phone-wrapper {
    display: none; 
  }
}

</style>