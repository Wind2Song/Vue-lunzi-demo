<template>
    <div>
        <Switch v-model:value="y"/>
        <h2>功能说明</h2>
        <p>
            Switch value="true" // 字符串true 表示“开"
            Switch:value="true" // 布尔值true 表示“开"
        </p>
    </div>
</template>
<script lang="ts">
import Switch from '../libs/Switch.vue'
import {ref} from 'vue'
export default{
    components: {Switch},
    setup(){
        const y = ref(false)
        return {y}
    }
}
</script>