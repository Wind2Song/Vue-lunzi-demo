<template>
    <div>
        <h1>Dialog 文档</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :onClickOverlay="true"
        :ok="fn1" :cancel="fn2">
          <template v-slot:content>
            <strong>hi</strong>
            <div>hi2</div>
          </template>
          <template v-slot:title>
            <strong>加粗的标题</strong>
          </template>
        </Dialog>
        <Button @click="showDialog">show</Button>
    </div>
</template>

<script lang="ts">
import Dialog from '../libs/Dialog.vue'
import Button from '../libs/Button.vue'
import { h, ref } from 'vue'
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
  const showDialog = () => {
    openDialog({
      title: h('strong', {}, '标题'),
      content: '你好',
      // ok() {
      //   console.log('ok')
      // },
      // cancel() {
      //   console.log('cancel')
      // }
    })
  }
  return {x,toggle,fn1,fn2,showDialog}
  }
}
</script>