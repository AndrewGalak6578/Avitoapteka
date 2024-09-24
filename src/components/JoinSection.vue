<script>
export default {
  name: "JoinSection",
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        city: null,
        direction: null
      },
      botToken: "7870271451:AAG2NoYNEv3WkujbOMncfTctDpNLaqRUBP0",
      chatId: "5275399678" // Замените на ID чата, куда вы хотите отправлять сообщения
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Создаем текст сообщения
        const message = `
          Новая заявка от:
          Имя и фамилия: ${this.formData.name}
          Телефон: ${this.formData.phone}
          Город: ${this.formData.city}
          Направление: ${this.formData.direction}
        `;

        // URL для отправки сообщения через Telegram Bot API
        const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

        // Выполняем POST-запрос
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: this.chatId,
            text: message
          }),
        });

        // Проверяем ответ
        if (response.ok) {
          alert("Заявка успешно отправлена!");
          this.formData = { name: '', phone: '', city: '', direction: '' }; // Сброс формы
        } else {
          alert("Ошибка отправки. Попробуйте еще раз.");
        }
      } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        alert("Ошибка при отправке данных. Попробуйте позже.");
      }
    }
  }
};
</script>

<template>
  <section class="join-section py-5">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Форма слева -->
      <div class="form-container p-4">
        <h2 class="fw-bold">Присоединяйтесь</h2>
        <form >
          <div class="mb-3">
            <input type="text" v-model="formData.name" class="form-control" placeholder="Имя и фамилия" required />
          </div>
          <div class="mb-3">
            <input type="tel" v-model="formData.phone" class="form-control" placeholder="Телефон" required />
          </div>
          <div class="mb-3">
            <input type="text" v-model="formData.city" class="form-control" placeholder="Город" required />
          </div>
          <div class="mb-3">
            <select class="form-select" v-model="formData.direction" required>
              <option value="" disabled >Направление</option>
              <option value="courier">Курьер</option>
              <option value="driver">Водитель</option>
              <option value="packer">Упаковщик</option>
            </select>
          </div>
          <button @click.prevent="handleSubmit" class="btn btn-light w-100">Откликнуться</button>
          <p class="small mt-2 text-muted">
            Нажимая на кнопку "Откликнуться", вы даете свое согласие на обработку персональных данных и соглашаетесь с политикой в отношении обработки персональных данных
          </p>
        </form>
      </div>

      <!-- Картинка справа -->
      <div class="image-container">
        <img src="@/assets/join-image.png" alt="Join Us" class="img-fluid rounded-4" />
      </div>
    </div>
  </section>
</template>



<style scoped>
.join-section {
  background: #CEECFF; /* Фон с градиентом */
  border-radius: 20px; /* Скругленные края секции */
  padding: 40px;
}

.form-container {
  flex: 1; /* Форма занимает 50% доступного пространства */
  max-width: 400px; /* Ограничиваем максимальную ширину */
  color: white; /* Белый цвет текста */
}

.image-container {
  flex: 1; /* Картинка занимает оставшуюся часть пространства */
  max-width: 50%; /* Ограничиваем максимальную ширину картинки */
}

.img-fluid {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    max-width: 100%; /* Даем картинке занимать всю ширину */
    margin-top: 20px;
  }
}
</style>
