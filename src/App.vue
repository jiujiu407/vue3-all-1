<template>
 
 <router-view/>
</template>

<script>
import { provide, ref } from 'vue'


export default {
  name: 'App',
 setup(){
   const menuVisible = ref(false)
  //  使用provide，将它标记为所有组件都能使用
   provide('menuVisible',menuVisible)
 }
}
</script>
