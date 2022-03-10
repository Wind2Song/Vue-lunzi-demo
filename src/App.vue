<template>
  <router-view />
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false);
    console.log(asideVisible.value)
      provide('asideVisible', asideVisible)
    return {
      asideVisible
    };
  }
}
</script>
