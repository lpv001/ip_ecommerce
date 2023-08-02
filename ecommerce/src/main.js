import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createStore } from 'vuex'

const app = createApp(App)
const vuestore = createStore(store)

// app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueSweetalert2)

app.mount('#app')
