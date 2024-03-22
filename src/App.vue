<template>
  <v-app>
    <NavigationBar/>

        <router-view/>


  </v-app>
</template>

<style>
#app {

}

</style>
<script setup>
import NavigationBar from "@/components/common/NavigationBar.vue";
</script>