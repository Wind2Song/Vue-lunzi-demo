import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Cong from './components/Cong.vue'
import CongC from './components/CongC.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/', component: Cong},
        {path:'/xxx', component: CongC}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app') // App挂载到div#app上
