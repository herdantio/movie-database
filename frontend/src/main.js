import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// install element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import './styles/global.scss'
import './assets/tailwind.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
