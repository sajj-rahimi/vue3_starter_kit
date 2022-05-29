import { createApp } from 'vue'
import App from './App.vue'

// -- quasar --
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/fa-IR'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// -- router --
import router from './router/index'

// --- axios --
import axios from '@/lib/axios'

const myApp = createApp(App)

myApp.use(router)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    config: {
        rtl: true,
    },
})

myApp.mount('#app')
