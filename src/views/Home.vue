<template>
    <div>
      <div class="topnavAndBanner">
        <div class="BG"></div>
        <Topnav />
        <div class="banner">
          <h1>源 UI</h1>
          <p>一个逆天的 UI 框架</p>
          <p class="actions">
              <a href="https://github.com/Wind2Song?tab=repositories" target="_blank">Github</a>
              <router-link to="/doc">开始</router-link>
          </p>
        </div>
      
      </div>
      <div class="features">
        <ul>
          <li>
            <img src="../image/vue.png" alt="">
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
            <img src="../image/ts.png" alt="">
            <h3>基于 TypeScript </h3>
            <p>TS 大法好</p>
          </li>
          <li>
            <img src="../image/jujue.png" alt="">
            <h3>代码易读</h3>
            <p>拒绝重复，永葆简洁</p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {ref,Ref} from 'vue'
export default {
  components:{ Topnav },
  setup(){
    const relative:Ref = ref<string>("/src/assets/source.png")
    return {relative}
  }
}

</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  height: 65vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  clip-path: ellipse( 80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
    ul>li{
      justify-content: start;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    ul>li{
      justify-content: center;
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      // justify-content: center;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >img {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text;
      }
    }
  }
}
.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
      font-size: 60px;
    }
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: $green;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }

</style>