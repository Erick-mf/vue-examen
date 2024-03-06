import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'

const app = createApp(App)

app.use(router, VueFire, {
  firebaseApp,
  modules: [VueFireAuth]
})

app.mount('#app')
