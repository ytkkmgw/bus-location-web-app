<!--現在位置-->
<template>
  <v-timeline
      direction="horizontal"
      side="start"
      align="start"
      density="compact"
  >
    <LocationPoint label="現在地" :now="isNowLocation(0)"/>
    <LocationPoint v-if="isNowLocation(1)" :now="true"/>

    <LocationPoint label="１つ前" :now="isNowLocation(2)"/>
    <LocationPoint v-if="isNowLocation(3)" :now="true"/>

    <LocationPoint label="２つ前" :now="isNowLocation(4)"/>
    <LocationPoint v-if="isNowLocation(5)" :now="true"/>

    <LocationPoint label="３つ前" :now="isNowLocation(6)"/>
    <LocationPoint v-if="isNowLocation(7)" :now="true"/>

    <LocationPoint label="４つ前" :now="isNowLocation(8)"/>
    <LocationPoint v-if="isNowLocation(9)" :now="true"/>

    <LocationPoint label="５つ前" :now="isNowLocation(10)"/>
    <LocationPoint v-if="isNowLocation(11)" :now="true"/>

  </v-timeline>
  <br>
  <v-chip size="x-small" text="現在位置" label/>
  {{ nowLocation }}

</template>

<script>
import LocationPoint from "@/components/common/LocationPoint.vue";

const locations = [
  "現在地に到着",
  "まもなく到着",
  "1つ前に停車中",
  "1つ前〜2つ前間を走行中",
  "2つ前に停車中",
  "2つ前〜3つ前間を走行中",
  "3つ前に停車中",
  "3つ前〜4つ前間を走行中",
  "4つ前に停車中",
  "4つ前〜5つ前間を走行中",
  "5つ前に停車中",
  "5つ前にも未到着",
]
export default {
  name: "NowLocation",
  props: ["now_location"],
  components: {LocationPoint},
  data() {
    return {
      nowLocation: this.now_location,
    }
  }, methods: {
    isNowLocation(locationNumber) {
      let locationIndex = null
      for (const [index, location] of Object.entries(locations)) {
        if (this.nowLocation === location) {
          locationIndex = Number(index)
          break
        }
      }

      if (locationIndex === null) {
        return false
      }

      return locationNumber === locationIndex
    },
  }
}
</script>

<style scoped>

</style>