import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './style.css'


createApp(App).use(store).use(router).mount('#app')

/* Add note */

/* var iconplus = document.getElementsByClassName('iconplus')
var note = document.getElementsByClassName('note')
editnote.onclick = () => {
    console.log('azer')
} */