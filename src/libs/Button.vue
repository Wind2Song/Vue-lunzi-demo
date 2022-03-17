<template>
    <button v-bind="$attrs">
        <slot />
    </button>
</template>

<script lang="ts">

export default{
    inheritAttrs: false //阻止div继承
}
</script>