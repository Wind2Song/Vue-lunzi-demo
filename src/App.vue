<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
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
