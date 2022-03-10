<template>
    <div>
        <Topnav />
        <div class="content">
            <aside v-if="asideVisible">
                <h1>组件列表</h1>
                <ol>
                    <li>
                        <router-link to="/Doc/switch">Switch</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/button">Button</router-link> 
                    </li>
                    <li>
                        <router-link to="/Doc/dialog">Dialog</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/tabs">Tabs</router-link>
                    </li>
                </ol>
            </aside>
            <main>
             <router-view />
            </main>
        </div>        
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from "../components/Topnav.vue"
export default {
  components:{ Topnav },
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log(asideVisible.value)
    return {asideVisible}
  }    
}
</script>
<style lang="scss" scoped>
aside{
  background: lightblue;
  width: 150px;
  padding: 16px;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>