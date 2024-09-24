<script>
export default {
  name: "Header"
}
</script>
<template>
  <div class="block custom-height mt-2 text-white d-flex flex-column overflow-auto rounded-5">
    <video class="background-video" autoplay loop muted playsinline>
      <source src="@/assets/video.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
    <div class="container">
      <!-- Навигация -->
      <div class="row align-items-center mt-3">
        <!-- Левый элемент -->
        <div class="col-auto">
          <img src="@/assets/logo.png" alt="Logo" class="logo"> <!-- Ваш логотип -->
        </div>

        <!-- Центральные элементы -->
        <div class="col d-flex justify-content-center">
          <nav class="nav">
            <a href="#jobs" class="nav-link text-white">Вакансии</a>
            <a href="#about" class="nav-link text-white mx-4">О нас</a>
            <a href="#contacts" class="nav-link text-white">Контакты</a>
          </nav>
        </div>

        <!-- Правый элемент -->
        <div class="col-auto">
          <button class="btn btn-outline-light rounded">Свяжитесь с нами</button>
        </div>
      </div>

      <!-- Центральный блок -->
      <div class="row mt-5">
        <div class="col d-flex flex-column align-items-center text-center">
          <p class="lead text-white">Платим от 3600 рублей в день</p>
          <h1 class="display-5 font-weight-bold">Достойная работа, которая помогает людям</h1>
          <p class="small text-white">Набираем сотрудников в лидирующую медицинскую логистическую компанию</p>
          <button class="btn btn-light btn-lg mt-3">Смотреть все вакансии</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-height {
  height: 95vh; /* Устанавливаем высоту */
  padding-bottom: 50px; /* Дополнительное пространство снизу */
  position: relative; /* Позволяет нам позиционировать видео внутри */
  border-radius: 20px; /* Применяем скругленные углы */
  overflow: hidden; /* Скрываем все, что выходит за пределы контейнера */
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Обеспечивает покрытие всего контейнера видео */
  z-index: 0; /* Размещает видео за всем остальным контентом */
}

.container {
  position: relative;
  z-index: 1; /* Перемещает содержимое контейнера поверх видео */
}

.logo {
  height: 30px; /* Устанавливаем высоту логотипа */
}

.lead {
  font-size: 1.25rem;
}

.display-5 {
  font-size: 2.5rem;
  margin: 10px 0;
}

.small {
  font-size: 0.875rem;
}
</style>