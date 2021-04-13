<template>
  <app-header />
  <top-click />
  <router-view />
  <back-footer />
</template>

<script>
import  AppHeader from "@/components/AppHeader.vue";
import  BackFooter from "@/components/BackFooter.vue";
import TopClick from "@/components/TopClick.vue";
export default {
  name:"App",
  components:{
    AppHeader,
    BackFooter,
    TopClick
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
