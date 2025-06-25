 <template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="logo">
          <img src="/icons/logo2.svg" alt="zagdom logo2" class="logo-img">
          <img src="/icons/zagdom2.svg" alt="zagdom" class="zagdom-img">
        </div>
        
        <nav class="footer-nav">
          <a href="#" v-for="item in navItems" :key="item.url" class="footer-nav-item">{{ item.label }}</a>
        </nav>
        
        <div class="contacts">
          <div class="contact-item phone">
            <img src="/icons/phone.svg" alt="phone" class="icon">
            <a :href="`tel:${phone}`" class="contact-link">{{ phone }}</a>
          </div>
          <div class="contact-item email">
            <img src="/icons/email.svg" alt="email" class="icon">
            <a href="mailto:info@gmail.com" class="contact-link">info@gmail.com</a>
          </div>
          <div class="contact-item address">
            <img src="/icons/location.svg" alt="location" class="icon">
            <span class="address-text">г. Владивосток, ул. Выселковая 48, стр. 3</span>
          </div>
        </div>
        
        <button class="btn">Оставить заявку</button>
      </div>
      
      <div class="footer-links">
        <a href="#" class="footer-link">© Загдом, 2021</a>
        <a href="#" class="footer-link">Политика конфиденциальности</a>
        <a href="#" class="footer-link">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
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
.footer {
  background-color: #254741;
  padding: 37px 0 33px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 88px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  align-items: flex-start;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 40px;
  width: auto;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  gap: 24px;
  font-size: 16px;
  margin-right: 122px;
  margin-left: 154px;
  padding-top: 12px;
}

.footer-nav-item {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.contacts {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  gap: 24px;
  font-size: 14px;
  font-weight: 400;
  padding-top: 11px;
}

.contact-item {
  display: flex;
  line-height: 120%;
  gap: 8px;
  align-items: flex-start;
}

.icon {
  width: 16px;
  height: 16px;
}

.contact-link,
.address-text {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.footer-links {
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  opacity: 0.6;
  color: #ffffff;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.footer-link:nth-child(1) {
  margin-right: 215px;
}

.footer-link:nth-child(2) {
  margin-right: 99px;
}

.btn {
  background-color: #029F59;
  color: #ffffff;
  border-radius: 10px;
  padding: 16px 40px;
  border: 0px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin-left: auto;
  transition: background 0.3s;
}

.btn:hover {
  background: #027a47;
}
</style>