<!--運行系統情報-->
<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-chip density="compact" label> {{ route_number }}</v-chip>
      </v-col>
      <v-col cols="4">
        <div class="departure_time" v-if="isDepartureTime(departure_time)">{{ departure_time }} 発</div>
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