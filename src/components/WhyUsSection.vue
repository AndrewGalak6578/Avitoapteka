<script>
export default {
  name: "WhyUsSection"
}
</script>

<template>
  <section class="why-us py-5">
    <div class="container">
      <!-- Заголовок секции -->
      <div class="row mb-4">
        <!-- Левый блок с заголовком -->
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h1 class="fw-bold">Почему <span class="fw-normal" style="font-style: italic;">людям</span><br/> у нас нравится</h1>
        </div>

        <!-- Правый блок с описанием -->
        <div class="col-md-6 d-flex align-items-center">
          <h3 class="text-muted">Работаем на рынке с 2017 года, за это время мы трудоустроили несколько сотен сотрудников</h3>
        </div>
      </div>

      <!-- Карточки с преимуществами -->
      <div class="row text-left">
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 rounded-4 p-3">
            <div class="card-body d-flex flex-column align-items-left">
              <img src="@/assets/logo.png" alt="Icon" class="mb-3" style="width: 50px;">
              <h5 class="card-title mb-5 ">Обучаем</h5>
              <p class="card-text text-muted mt-2">Мы принимаем сотрудников без опыта работы и даем знания для более быстрого старта</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 rounded-4 p-3">
            <div class="card-body d-flex flex-column align-items-left">
              <img src="@/assets/logo.png" alt="Icon" class="mb-3" style="width: 50px;">
              <h5 class="card-title mb-5">Поддерживаем</h5>
              <p class="card-text text-muted mt-2">Здесь выбирают удобный график, чтобы совмещать подработку с учебой или другой работой</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 rounded-4 p-3">
            <div class="card-body d-flex flex-column align-items-left">
              <img src="@/assets/logo.png" alt="Icon" class="mb-3" style="width: 50px;">
              <h5 class="card-title mb-5">Достойно платим</h5>
              <p class="card-text text-muted mt-2">Мы стремимся к тому, чтобы наши сотрудники получали зарплату выше рынка</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 rounded-4 p-3">
            <div class="card-body d-flex flex-column align-items-left">
              <img src="@/assets/logo.png" alt="Icon" class="mb-3" style="width: 50px;">
              <h5 class="card-title mb-5">Развиваем</h5>
              <p class="card-text text-muted mt-2">В нашей компании возможен рост до позиций менеджера</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us {
  background-color: transparent; /* Светлый фон для выделения секции */
}

.card {
  border: none; /* Убираем границы у карточек */
  background-color: #F5F3F0; /* Светло-серый цвет для фона карточек */
  border-radius: 20px; /* Большие скругленные углы */
}

.card-body {
  padding: 20px; /* Дополнительный отступ внутри карточки */
}

.card-title {
  font-weight: 600;
  margin-bottom: 10px; /* Добавляем отступ между заголовком и текстом */
}

.img-icon {
  width: 50px; /* Увеличиваем размер иконки */
  margin-bottom: 15px; /* Добавляем отступ между иконкой и заголовком */
}

p.card-text {
  font-size: 0.875rem; /* Уменьшаем размер шрифта */
  line-height: 1.5; /* Увеличиваем интервал между строками */
  color: #6c757d; /* Светло-серый цвет текста */
}

</style>