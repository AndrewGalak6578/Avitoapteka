<script>
export default {
  name: "StatsSection"
}
</script>

<template>
  <section class="stats-section py-5 bg-light text-dark rounded-5">
    <div class="container text-center">
      <!-- Верхний текст и заголовок -->
      <div class="mb-4">
        <p class="small-text">Наша история начинается в 2017 году</p>
        <h2 class="fw-bold">Упрощаем <span class="italic">покупку и доставку</span><br/> медицинских товаров</h2>
        <p>Мы являемся одним из ведущих партнёров аптечных сетей России</p>
      </div>

      <!-- Три блока в ряд -->
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between align-items-center stat-card">
            <div class="icon-circle">
              <img src="@/assets/logo.svg" alt="Icon1" class="stat-icon">
            </div>
            <h4 class="fw-bold">86 городов</h4>
            <p>Осуществляем доставку в более чем 86 городах России, включая Москву, Санкт-Петербург</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between align-items-center stat-card">
            <div class="icon-circle">
              <img src="@/assets/logo.svg" alt="Icon2" class="stat-icon">
            </div>
            <h4 class="fw-bold">Более 2 млн человек</h4>
            <p>Ежедневно получают медицинские товары, которые были доставлены с помощью нас</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between align-items-center stat-card">
            <div class="icon-circle">
              <img src="@/assets/logo.svg" alt="Icon3" class="stat-icon">
            </div>
            <h4 class="fw-bold">Быстрая скорость</h4>
            <p>Медицинский товар доходит от производителя до клиента за неделю и меньше</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 60px 0;
  background-color: #f8f9fa; /* Светлый фон для секции */
}

.small-text {
  font-size: 0.9rem;
  color: #6c757d;
}

.italic {
  font-style: italic;
}

.stat-card {
  background: linear-gradient(to bottom, #f0f5ff, #ffffff); /* Градиент для карточек */
}

.icon-circle {
  width: 80px; /* Размер круга */
  height: 80px;
  background-color: #fff; /* Цвет фона круга */
  border-radius: 50%; /* Делаем круг */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Добавляем тень */
  margin-bottom: 15px;
}

.stat-icon {
  width: 40px; /* Размер иконки */
  height: auto;
}
.italic {
  font-style: italic;
  font-weight: 300; /* Сбрасываем жирность */
}
</style>