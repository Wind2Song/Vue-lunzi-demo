<demo>
常规用法
</demo>
<template>
<Switch v-model:value="bool" />
</template>

<script lang="ts" type="module">
import Switch from './Switch.vue'
import {
  ref
} from 'vue'
export default{
  components: {
    Switch,
  },
  setup(){
    const bool = ref(false);
    return {bool}
  }
}
</script>