<template>
  <router-view />
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
  name: 'App',
  setup(){
    const asideVisible = ref(true);
    provide('asideVisible', asideVisible)
  }
}
</script>
