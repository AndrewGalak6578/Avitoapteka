import './assets/main.css'

import { createApp } from 'vue'
import Index from "@/views/Index.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from './router'

const app = createApp(Index)

app.use(router)

app.mount('#app')
