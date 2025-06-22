<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="~/assets/images/logo.png" alt="zagdom logo">
      </div>
      
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item"><a href="#">Реализованные проекты</a></li>
          <li class="nav-item"><a href="#">Новости</a></li>
          <li class="nav-item"><a href="#">Контакты</a></li>
        </ul>
      </nav>
      
      <div class="contacts">
        <div class="phone-wrapper">
          <img src="~/assets/images/telephone.png" alt="phone icon" class="phone-icon">
          <a href="tel:79009009090" class="phone">7 (900) 900-90-90</a>
        </div>
        <button class="btn">Оставить заявку</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Логика компонента
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  
  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo {
    margin-right: 88px;
    
    img {
      height: 40px;
      width: auto;
    }
  }
  
  .nav {
    flex-grow: 1;
    
    &-list {
      display: flex;
      gap: 24px;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    &-item {
      a {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0;
        text-decoration: none;
        color: #333;
        padding: 39px 0;
        position: relative;
        
      }
    }
  }
  
  .contacts {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;
    
    .phone-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: 24px;
    }
    
    .phone-icon {
      width: 16px;
      height: 16px;
    }
    
    .phone {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      letter-spacing: 0;
      text-decoration: none;
      color: #333;
      
    }
    
    .btn {
      font-family: 'Montserrat', sans-serif;
      background: #029F59;
      color: white;
      border: none;
      padding: 16px 40px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 400;
      line-height: 120%;
      cursor: pointer;
      transition: background 0.3s;
      height: 49px;
      display: flex;
      align-items: center;
      gap: 10px;

    }
  }
}
</style>