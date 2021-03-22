<template>
    <div>
        <div v-for="(t,index) in titles" :key="index">{{t}}</div>
        <!-- 嵌套渲染插槽内容 -->
        <component v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props,context){
        const defaults = context.slots.default()
        // 检查子组件Tab的类型
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        return {
            defaults,
            titles
        }
    }
}
</script>