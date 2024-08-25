import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'


import "./style.css";
import routes from './components/router/routers'
import App from './App.vue'
 
const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
