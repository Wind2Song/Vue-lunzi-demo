<template>
    <div>
        <h1>Dialog 文档</h1>
        <Dialog v-model:visible="x" :onClickOverlay="true"></Dialog>
        <Button @click="toggle">toggle</Button>
    </div>
</template>

<script lang="ts">
import Dialog from '../libs/Dialog.vue'
import Button from '../libs/Button.vue'
import { ref } from 'vue'
export default{
  components:{Dialog,Button},
setup(){
  const x = ref(false)
  const toggle = ()=>{
    x.value = !x.value
  }
  return {x,toggle}
  }
}
</script>