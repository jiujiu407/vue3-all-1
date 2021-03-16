import {createWebHashHistory,createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDome.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        // 当用户访问根路径，我们就渲染
        {path:"/",component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'switch', component:SwitchDemo},
            {path:'button', component:ButtonDemo},
            {path:'dialog', component:DialogDemo},
            {path:'tabs', component:TabsDemo}
        ]}
    ]
});
