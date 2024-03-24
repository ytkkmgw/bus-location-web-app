<!--運行系統情報-->
<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-chip density="compact" :text="route_number" variant="flat"/>
      </v-col>
      <v-col cols="5">
        <div class="departure_time" v-if="isDepartureTime(departure_time)">
          <v-chip  size="x-small" text="次の発車" label/>
          {{ departure_time }} 発
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">{{ destination }} 行</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BusInfo",
  props: ['route_number', 'destination', 'departure_time'],
  methods: {
    isDepartureTime(value) {
      return value !== ""
    }
  }
}
</script>

<style scoped>
.departure_time {
  text-align: right;
}
</style>