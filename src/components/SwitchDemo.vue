<template>
    <div>
        <Switch />
        <h2>功能说明</h2>
        <p>
            Switch value="true" // 字符串true 表示“开"
            Switch:value="true" // 布尔值true 表示“开"
        </p>
    </div>
</template>
<script lang="ts">
import Switch from '../libs/Switch.vue'
export default{
    components: {Switch}
}
</script>