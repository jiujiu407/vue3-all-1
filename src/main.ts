import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Jiu from './components/Jiu.vue'
import Jiu2 from './components/Jiu2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        // 当用户访问根路径，我们就渲染Jiu
        {path:'/',component:Jiu},
        {path:'/xxx',component:Jiu2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')