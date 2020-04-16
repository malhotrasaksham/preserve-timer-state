<template>
  <div id="app">
    <router-link :to="'first'">First</router-link>
    <router-link :to="'second'">Second</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import first from "@/components/first";
export default {
  name: "App",
  components: {
    first
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
