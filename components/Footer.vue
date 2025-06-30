<template>
  <footer class="footer">
    <div class="_container">
      <div class="footer__content">
        <div class="footer__logo" @click="goHome">
          <img src="/icons/logo2.svg" alt="zagdom logo2" class="logo-img">
          <img src="/icons/zagdom2.svg" alt="zagdom" class="zagdom-img">
        </div>
        
        <nav class="footer__nav">
          <NuxtLink to="/projects" class="footer__nav-item">Реализованные проекты</NuxtLink>
          <NuxtLink to="/news" class="footer__nav-item">Новости</NuxtLink>
          <NuxtLink to="/contacts" class="footer__nav-item">Контакты</NuxtLink>
        </nav>
        
        <div class="footer__contacts">
          <div class="footer__contact">
            <img src="/icons/phone.svg" alt="phone" class="footer__icon">
            <a :href="`tel:${phone}`" class="footer__link">{{ phone }}</a>
          </div>
          <div class="footer__contact">
            <img src="/icons/email.svg" alt="email" class="footer__icon">
            <a href="mailto:info@gmail.com" class="footer__link">info@gmail.com</a>
          </div>
          <div class="footer__contact">
            <img src="/icons/location.svg" alt="location" class="footer__icon">
            <span class="footer__text">г. Владивосток, ул. Выселковая 49, стр. 3</span>
          </div>
        </div>
        
        <button class="footer__button">Оставить заявку</button>
      </div>
      
      <div class="footer__bottom">
        <a href="#" class="footer__bottom-item">© Загдом, 2021</a>
        <a href="#" class="footer__bottom-item">Политика конфиденциальности</a>
        <a href="#" class="footer__bottom-item">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const phone = '+7 (900) 900-90-90'

const goHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #254741;
  padding: 40px 0 30px;
  color: #ffffff;
}

._container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4.5vw, 88px);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer__content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo-img {
  height: clamp(32px, 3vw, 40px);
  width: auto;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;
  margin-right: 100px;
  margin-left: 0;
  padding-left: 90px;
  padding-top: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;
  padding-top: 11px;
  font-family: 'Montserrat', sans-serif;
}

.footer__contact {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.footer__icon {
  width: 16px;
  flex-shrink: 0;
}

.footer__link, .footer__text {
  color: #ffffff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

.footer__button {
  background-color: #029F59;
  color: #ffffff;
  border-radius: 10px;
  padding: 12px 24px;
  border: 0px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background 0.3s;
  margin-left: auto;
  height: fit-content;
  white-space: nowrap;
  font-size: 14px;
  
  &:hover {
    background: #027a47;
  }
}

.footer__bottom {
  display: flex;
  font-size: 14px;
  opacity: 0.6;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  text-align: left; 
  align-items: flex-start;
  padding-left: 0; 
}

.footer__bottom-item {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  
  &:nth-child(1) {
    margin-right: clamp(20px, 11vw, 215px);
  }
  
  &:nth-child(2) {
    margin-right: clamp(15px, 5vw, 99px);
  }
  
  &:hover {
    opacity: 1;
  }
}

@media (max-width: 992px) {
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo nav"
      "contacts btn";
    row-gap: 40px;
  }

  .footer__nav {
    flex-direction: column;
    gap: 16px;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
  }

  .footer__contacts {
    padding-top: 0;
  }

  .footer__button {
    margin-left: 0;
    width: fit-content;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "logo logo logo"
      "contacts nav btn";
    gap: 24px 40px;
    align-items: flex-start;
  }

  .footer__logo {
    grid-area: logo;
    justify-self: start;
    cursor: pointer;
  }

  .footer__contacts {
    grid-area: contacts;
    padding-top: 0;
  }
  .footer__nav {
    grid-area: nav;
    margin-left: 0;
    padding-left: 0;
    padding-top: 0;
    gap: 16px;
  }

  .footer__button {
    grid-area: btn;
    margin-left: 0;
    align-self: flex-start;
  }
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "logo"
      "nav"
      "contacts"
      "btn";
    gap: 16px;
  }

  .footer__nav {
    margin-top: 0;
    margin-left: 0;
    padding-left: 0;
    gap: 16px;
  }

  .footer__nav-item {
    font-size: 16px;
  }

  .footer__contacts {
    margin-top: 16px;
    gap: 16px;
  }

  .footer__contact {
    align-items: center;
  }

  .footer__button {
    margin-top: 24px;
    padding: 12px 24px; 
    font-size: 14px; 
    margin-left: 0; 
  }

  .footer__bottom {
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
    text-align: center;
    
    .footer__bottom-item {
      font-size: 14px;
      
      &:nth-child(1),
      &:nth-child(2) {
        margin-right: 0;
      }
    }
  }
}
</style>
