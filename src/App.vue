<template>
 
 <router-view/>
</template>

<script>
import { provide, ref } from 'vue';
import {router} from './router';


export default {
  name: 'App',
 setup(){
  //  通过获取页面的宽度，来决定初始值
  const width = document.documentElement.clientWidth;
  const menuVisible = ref(width <= 500 ? false : true);
  //  使用provide，将它标记为所有组件都能使用
   provide('menuVisible',menuVisible);
   router.afterEach(() => {
     // to and from are both route objects.
     if(width <= 500){
         menuVisible.value = false;
     }
   });
 }
}
</script>
