<template>
    <h1>theme</h1>
    <Button>你好</Button>
    <Button theme="focus">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
    <h1>size</h1>
    <Button>普通</Button>
    <Button size="big">大</Button>
    <Button size="small">小</Button>
</template>

<script lang="ts">
import Button from '../libs/Button.vue'
export default{
    components: {Button},
    setup(){
        const onClick = ()=>{console.log('hi')}
        return {onClick}
    }
}
</script>