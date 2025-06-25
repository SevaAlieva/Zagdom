<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <div class="logo">
          <img src="/icons/logo.svg" alt="zagdom logo" class="logo-img">
          <img src="/icons/zagdom.svg" alt="zagdom" class="zagdom-img">
        </div>
        
        <nav class="nav">
          <a href="#" v-for="item in navItems" :key="item.url" class="nav-item">{{ item.label }}</a>
        </nav>
      </div>
      
      <div class="header-right">
        <div class="phone-wrapper">
          <img src="/icons/phone.svg" alt="phone icon" class="icon">
          <a :href="`tel:${phone}`" class="phone">{{ phone }}</a>
        </div>
        <button class="btn">Оставить заявку</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const phone = '+7 (900) 900-90-90'

const navItems = [
  { url: '#projects', label: 'Реализованные проекты' },
  { url: '#news', label: 'Новости' },
  { url: '#contacts', label: 'Контакты' }
]
</script>

<style scoped>
.header {
  padding: 24px 0;
}

.container {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 88px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 80px;
  width: 50%;
  font-family: 'Open Sans', sans-serif;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav {
  display: flex;
  gap: 24px;
  font-size: 16px;
}

.nav-item {
  color: #666666;
  cursor: pointer;
  text-decoration: none;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  gap: 24px;
  font-family: 'Montserrat', sans-serif;
}

.phone-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 120%;
}

.icon {
  width: 16px;
}

.phone {
  color: #254741;
  cursor: pointer;
  text-decoration: none;
}

.btn {
  background-color: #029F59;
  color: #ffffff;
  border-radius: 10px;
  padding: 16px 40px;
  border: 0px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;
}

.btn:hover {
  background: #027a47;
}
</style>