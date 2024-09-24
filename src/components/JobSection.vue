<script>
export default {
  name: "JobSection"
}
</script>

<template>
  <section class="block job-section py-5 bg-black text-white rounded-5">

    <div class="container">
      <!-- Заголовок секции -->
      <div class="row mb-4">
        <div class="col text-center">
          <h2 class="fw-bold text-white">Открытые вакансии</h2>
        </div>
      </div>

      <!-- Блоки с вакансиями -->
      <div class="row">
        <!-- Первый большой блок с градиентом справа налево -->
        <div class="col-md-12 mb-4">
          <div class="card p-4 shadow-sm rounded-4 job-card bg-gradient-to-left h-100 d-flex flex-column justify-content-between">
            <div class="icon-container">
              <img src="@/assets/Icon.svg" alt="Icon" class="centered-icon">
            </div>
            <div class="bg-image bg-image-kurier"></div> <!-- Добавляем слой изображения -->
            <div class="left-content p-4">
              <h4 class="text-dark">Курьер</h4>
              <p class="text-muted">Работа с гибким графиком. Средний доход у наших курьеров составляет <br/> от 7 000 рублей в день, а в месяц более
                200 000 рублей</p>
              <button class="btn btn-dark custom-btn">Связаться</button>
            </div>
          </div>
        </div>

        <!-- Меньшие блоки под основным -->
        <div class="col-md-6 mb-4">
          <div class="card p-4 shadow-sm rounded-4 job-card bg-gradient-to-left-small h-100 d-flex flex-column justify-content-between">
            <div class="bg-image bg-image-upakovka"></div> <!-- Добавлено -->
            <div class="left-content p-3">
              <h4 class="text-dark">Упаковщик</h4>
              <p class="text-muted">Ежедневно получают медицинские <br/>товары, которые были доставлены</p>
              <button class="btn btn-dark custom-btn">Связаться</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card p-4 shadow-sm rounded-4 job-card bg-gradient-to-left-small h-100 d-flex flex-column justify-content-between">
            <div class="bg-image bg-image-voditel"></div> <!-- Добавлено -->
            <div class="left-content p-3">
              <h4 class="text-dark">Водитель</h4>
              <p class="text-muted">Настраиваем безопасное <br/>подключение, защиту от атак</p>
              <button class="btn btn-dark custom-btn">Связаться</button>
            </div>
          </div>
        </div>

<!--        <div class="col-md-6 mb-4">-->
<!--          <div class="card p-4 shadow-sm rounded-4 job-card bg-gradient-to-left-small h-100 d-flex flex-column justify-content-between">-->
<!--            <div class="bg-image bg-image-voditel"></div> &lt;!&ndash; Изменено: Добавляем класс "bg-image" &ndash;&gt;-->
<!--            <div class="left-content p-3">-->
<!--              <h4 class="text-dark">Водитель</h4>-->
<!--              <p class="text-muted">Настраиваем безопасное подключение, защиту от атак</p>-->
<!--              <button class="btn btn-dark custom-btn">Связаться</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<style scoped>
.job-section {
  padding: 80px 0;
  background-color: #000; /* Черный фон для секции */
  overflow: visible;
}

.job-card {
  border: none; /* Убираем границу */
  border-radius: 20px; /* Скругленные углы */
  height: 100%; /* Заставляем карту занимать всю высоту родителя */
}

.bg-gradient-to-left {
  position: relative; /* Относительное позиционирование для создания эффекта слоя */
  background: #fff; /* Устанавливаем белый фон как основной */
  height: 300px !important; /* Увеличиваем высоту основного блока */
}

.bg-gradient-to-left-small {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), #fff 50%);
  height: 300px; /* Увеличиваем высоту маленьких блоков */
}

.bg-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  border-radius: 2%;
  background-size: cover;
  mask-image: linear-gradient(to right, transparent, black 50%);
  -webkit-mask-image: linear-gradient(to right, transparent, black 50%);
}
.bg-image-kurier {
  background: url('@/assets/main_block_job.png') no-repeat center right;
}
.bg-image-voditel {
  background: url('@/assets/voditel.png') no-repeat center right;
  width: 50%; /* Настройте ширину под размер блока */
}
.bg-image-upakovka {
  background: url('@/assets/upakovka.png') no-repeat center right;
  width: 60%; /* Настройте ширину под размер блока */
}

.left-content {
  position: relative; /* Относительное позиционирование поверх изображения */
  z-index: 1; /* Увеличиваем z-index, чтобы содержимое оставалось над изображением */
  height: 100%; /* Заполняем весь блок */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2, h4 {
  margin-bottom: 10px;
}

.custom-btn {
  display: inline-block; /* Делаем кнопку только такой ширины, какой необходимо */
  width: fit-content; /* Ширина подстраивается под содержимое */
  margin-right: 90%; /* Центрируем кнопку внутри контейнера */
  padding: 10px 20px; /* Отступы внутри кнопки */
  border-radius: 50px; /* Закругленные края кнопки */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 -1px 6px rgba(255, 255, 255, 0.1) inset; /* Выпуклый эффект */
  transition: transform 0.3s, box-shadow 0.3s; /* Плавный переход для эффекта нажатия */
}

.custom-btn:hover {
  transform: translateY(-2px); /* Эффект "выпуклости" при наведении */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4), 0 -2px 8px rgba(255, 255, 255, 0.15) inset;
}
.icon-container {
  position: absolute;
  top: 40px; /* Поднимите иконку над контентом, подкорректируйте значение как нужно */
  left: 55%;
  transform: translateX(-50%);
  z-index: 2; /* Помещаем иконку выше всего остального контента */
}

.centered-icon {
  width: 150px; /* Устанавливаем размер иконки, измените по мере необходимости */
  height: auto;
}
</style>