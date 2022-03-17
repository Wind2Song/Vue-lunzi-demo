<template>
    <div>
        <button v-bind="$attrs">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">

export default{
    inheritAttrs: false //阻止div继承
}
</script>
<style lang="scss">
div{
    border:1px solid red;
}
</style>