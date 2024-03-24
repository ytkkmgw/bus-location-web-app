<!--バス便一覧-->
<template>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="12">
          <v-item>
            <BusSummary/>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script setup>
import BusSummary from "@/components/common/BusSummary.vue";
</script>

<style scoped>

</style>