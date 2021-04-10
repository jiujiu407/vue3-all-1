<template>
    <div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
     <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" 
     :ref="el => { if (t===selected) selectedItem = el }" 
     @click="select(t)" :class="{selected: t=== selected}" 
     :key="index">{{t}}</div>
      <div class="gulu-tabs-nav-indicator"
      ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item"
    :class="{selected: c.props.title === selected}"
     v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {computed, onMounted, ref,watchEffect} from 'vue'
export default {
    props:{
      selected:{
          type:String
      }
    },
    setup(props,context){
        // 为了获取标题元素确定长度进而设置动态div的宽度
        // 说明此数组为一个HTMLDiv元素的数组
        const selectedItem = ref < HTMLDivElement > (null)
        const indicator =ref<HTMLDivElement>(null)
        const  container =ref<HTMLDivElement>(null)
        const x =()=>{ 
           const {width} =selectedItem.value.getBoundingClientRect()
           indicator.value.style.width = width + 'px'
        // getBoundingClientRect用于获取某个元素相对于视窗的位置集合。
           const {left:left1} =container.value.getBoundingClientRect()
           const {left:left2} =selectedItem.value.getBoundingClientRect()
           const left = left2 - left1
           indicator.value.style.left = left + 'px'}
        // watchEffect(x)代替onMounted(x)和onUpdated(x)
        onMounted(()=>{watchEffect(()=>{ 
          console.log('watch effect 执行了')
           const {width} =selectedItem.value.getBoundingClientRect()
           indicator.value.style.width = width + 'px'
           const {left:left1} =container.value.getBoundingClientRect()
           const {left:left2} =selectedItem.value.getBoundingClientRect()
           const left = left2 - left1
           indicator.value.style.left = left + 'px'})})
        const defaults = context.slots.default()
        // // 检查子组件Tab的类型
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
         const select = (title: string) => {
      context.emit('update:selected', title)
    }
        return {
            defaults,
            titles,
            select,
            selectedItem,
            indicator,
            container
        }
    }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
     &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
        display: none;
        &.selected {
            display: block;
        }
    }
  }
}
</style>