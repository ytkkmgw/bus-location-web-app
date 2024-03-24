<template>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col v-for="item in routes" :key="item" cols="12">
          <v-item>
            <BusSummary :content="item"/>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>


import BusSummary from "@/components/common/BusSummary.vue";

export default {
  name: "BusList",
  components: {BusSummary},
  props: ['content'],
  data() {
    return {
      routes: this.content.routes

    }
  }
}
</script>

<style scoped>

</style>