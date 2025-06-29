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
  <section class="features-grid">
    <div class="_container">
      <div class="features-content">
        <h2 class="features-title">Каждый проект<br>для нас — важный</h2>
        <div class="features-text">
          <span>Мы строительная компания полного цикла.</span>
          <span>
            Вникаем во все детали, разрабатываем планировку 
            будущего дома, продумываем конструктивные решения 
            и общую архитектурную концепцию
          </span>
        </div>
        <div class="features-card">
          <img class="card-icon" :src="stats[0].icon" :alt="stats[0].value">
          <div class="card-value">{{ stats[0].value }}</div>
          <div class="card-label">{{ stats[0].label }}</div>
        </div>
        <div class="features-card">
          <img class="card-icon" :src="stats[1].icon" :alt="stats[1].value">
          <div class="card-value">{{ stats[1].value }}</div>
          <div class="card-label">{{ stats[1].label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.features-grid {
  padding: 0 88px 120px;
  @include for-phone-only {
    padding: 0 20px 80px;
  }
}

.features-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;

  @include for-phone-only {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.features-title {
  font-family: var(--font);
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  margin-bottom: 24px;
  grid-column: 1 / span 3;
  color: #000;

  @include for-phone-only {
    font-size: 28px;
  }
}

.features-text {
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  color: #666;
  font-size: 20px;
  line-height: 135%;
  gap: 16px;
  grid-column: 1;
}

.features-card {
  background-color: #F5F7F3;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  margin: -70px auto 20px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-icon {
  margin-bottom: 24px;
  width: 24px;
  height: 24px;
}

.card-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0;
  margin-bottom: 4px;
  color: #000;
}

.card-label {
  font-family: var(--main-font);
  font-size: 20px;
  line-height: 135%;
  color: #666666;
}
</style>