import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from "axios"

loadFonts()

const app = createApp(App) 


app.config.globalProperties.$axios = axios
axios.defaults.baseURL = 'https://jobs.tipiteq.com';

app.use(store)
   .use(vuetify)
   .mount('#app')
