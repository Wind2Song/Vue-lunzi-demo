<template>
    <div class="layout">
        <Topnav :toggleMenuButtonVisible="true" class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
              <h2>文档</h2>
              <ol>
                <li>
                  <router-link to="/Doc/intro">介绍</router-link>
                </li>
                <li>
                  <router-link to="/Doc/install">安装</router-link>
                </li>
                <li>
                  <router-link to="/Doc/get-started">开始使用</router-link>
                </li>
              </ol>

                <h2>组件列表</h2>
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
    return {asideVisible}
  }    
}
</script>
<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
    background: white;
  }
}
aside{
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  top: 0;
  left: 0;
  > h2 {
    padding: 0 16px;
    margin-bottom: 4px;
  }
  > ol {
    > li {
      a{
        display: block;
        padding: 4px 16px;
      }
      .router-link-active{
          background: white;
      }
    }
  }
}
main{
  overflow: auto;
}
</style>