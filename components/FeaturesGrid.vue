<script setup lang="ts">
const stats = [
  {
    icon: '/icons/home.svg',
    value: '57 домов',
    label: 'спроектировали и построили "под ключ"'
  },
  {
    icon: '/icons/calendar.svg',
    value: '14 лет',
    label: 'мы на рынке загородного строительства'
  }
]
</script>

<template>
  <div class="grid">
    <div class="text">
      <h1>Каждый проект<br>для нас — важный</h1>
      <p>Мы строительная компания полного цикла.</p>
      <p>Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую архитектурную концепцию</p>
    </div>
    <div class="card">
      <img :src="stats[0].icon" :alt="stats[0].value">
      <div class="card-text">
        <h2>{{ stats[0].value }}</h2>
        <p>{{ stats[0].label }}</p>
      </div>
    </div>
    <div class="card2">
      <img :src="stats[1].icon" :alt="stats[1].value">
      <div class="card-text">
        <h2>{{ stats[1].value }}</h2>
        <p>{{ stats[1].label }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 24px 26px;
  margin-bottom: 150px;
  gap: 5px;
  max-width: 1200px;
  margin: 0 auto;
}

.text {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.text h1 {
  color: rgb(0, 0, 0);
  font-family: 'Montserrat';
  font-size: 38px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
}

.text p + p {
  margin-top: 16px;
}

.text p {
  color: rgb(102, 102, 102);
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: 0%;
  text-align: left;
}

.card, .card2 {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background-color: rgba(245, 247, 243, 1);
  border-radius: 20px;
  width: 304px;
  height: 187px;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card h2, .card2 h2 {
  margin: 0;
  padding: 0;
  color: rgb(0, 0, 0);
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
}

.card p, .card2 p {
  margin: 0;
  padding: 0;
  color: rgb(102, 102, 102);
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: 0%;
  text-align: left;
}

@media (max-width: 1150px) {
  .text {
    width: 100%;
    height: auto; 
  }
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 10px;
  }
}
@media (max-width: 768px) {
  .text {
    width: 100%;
    height: auto;
  }
  .text h1 {
    font-size: 28px;
  }
  .text p {
    font-size: 16px;
  }
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 10px;
    padding: 20px 16px;
    margin-bottom: 80px;
  }
  
  .card, .card2 {
    width: auto;
    height: auto;
    padding: 20px;
  }
  
  .card p, .card2 p {
    font-size: 16px;
  }
}
</style>