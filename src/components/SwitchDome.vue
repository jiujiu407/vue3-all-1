<template>
    <div>
 <!--  @update:value="y = $event"对事件进行监听，用v-model替代 -->
 <!-- switch有一个value自动监听，也就是双向绑定 -->
 <Switch v-model:value="bool" />
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components: {Switch},
    setup(){
        const bool = ref(true)
        return {bool}

    }
}
</script>