<template>
    <div>
        <h1>Dialog 文档</h1>
        <Dialog v-model:visible="x" :onClickOverlay="true"
        :ok="fn1" :cancel="fn2">
          <template v-slot:content>
            内容
          </template>
          <template v-slot:title>
            标题
          </template>
        </Dialog>
        <Button @click="toggle">toggle</Button>
        <Button @click="showDialog">show</Button>
    </div>
</template>

<script lang="ts">
import Dialog from '../libs/Dialog.vue'
import Button from '../libs/Button.vue'
import { ref } from 'vue'
import {openDialog} from '../libs/openDialog'
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
  const showDialog = ()=>{
    openDialog({
      title: '标题',
      content: '内容'
    })
  }
  return {x,toggle,fn1,fn2,showDialog}
  }
}
</script>