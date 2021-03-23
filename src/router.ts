import {createWebHashHistory,createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDome.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const history = createWebHashHistory();
const md = filename =>h(Markdown,{path:`../markdown/
${filename}.md`,key:filename})
export const router = createRouter({
    history:history,
    routes:[
        // 当用户访问根路径，我们就渲染
        {path:"/",component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:"get-started",component:md('get-started')},
            {path:"install",component:md('install')},
            {path:'intro',component:md('intro')},
            {path:'switch', component:SwitchDemo},
            {path:'button', component:ButtonDemo},
            {path:'dialog', component:DialogDemo},
            {path:'tabs', component:TabsDemo}
        ]}
    ]
});
