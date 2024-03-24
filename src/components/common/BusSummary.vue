<!--運行系統概要-->
<template>
  <v-card v-for="item in routes" :key="item" :variant="isInvalid(item)">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <BusInfo :route_number="item.route_number" :departure_time="item.recent_departure"
                   :destination="item.destination"/>
        </v-col>
        <v-divider v-if="$vuetify.display.sm || $vuetify.display.xs"/>
        <v-divider v-if="!$vuetify.display.sm || $vuetify.display.xs" vertical/>
        <v-col cols="12" md="6">
          <v-container v-if="isNoneLocation(item.now_location)" align-center>直近の運行はなし</v-container>
          <NowLocation v-else :now_location="item.now_location"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>


import BusInfo from "@/components/common/BusInfo.vue";
import NowLocation from "@/components/common/NowLocation.vue";

export default {
  name: "BusSummary",
  components: {NowLocation, BusInfo},
  props: ['content'],
  data() {
    return {
      tab: null,
      routes: this.content.routes
    }
  }, methods: {
    isInvalid(item) {
      // 位置情報が無い場合はカード全体をグレーアウトする
      if (this.isNoneLocation(item.now_location)) {
        return "tonal"
      }
      return "elevated"
    },
    isNoneLocation(value) {
      return value === "位置情報無し";

    }
  }
}
</script>

<style scoped>


</style>