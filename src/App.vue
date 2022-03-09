<template>
  <div>hi | 
    <router-link to="/">HOME</router-link> | 
    <router-link to="/doc">DOC</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
