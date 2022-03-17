<template>
    <Button>你好</Button>
    <Button theme="">你好</Button>
    <Button theme="">你好</Button>
    <Button theme="text">你好</Button>
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