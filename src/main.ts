import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        // 当用户访问根路径，我们就渲染Jiu
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')