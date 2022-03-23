<template>
    <div>
        <h1>Dialog 文档</h1>
        <Dialog v-model:visible="x" :onClickOverlay="true"
        :ok="fn1" :cancel="fn2"></Dialog>
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
  const fn1 = ()=>{
    return true
  }
  const fn2 = ()=>{
    console.log('2')
  }
  return {x,toggle,fn1,fn2}
  }
}
</script>