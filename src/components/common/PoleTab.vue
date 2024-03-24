<template>
  <v-card elevation="0">
    <v-tabs v-model="tab" color="blue" align-tabs="center">
      <v-tab :value="index" v-for="item in poles" :key="item">{{ item.pole_number }}
        <v-chip v-if="isPlatformNumber(item.platform)" density="comfortable" size="x-small">のりば{{
            item.platform
          }}
        </v-chip>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item :value="index" v-for="item in poles" :key="item">
          <BusSummary :content="item"/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>

import BusSummary from "@/components/common/BusSummary.vue";

export default {
  name: "PoleTab",
  components: {BusSummary},
  props: ['content'],
  data() {
    return {
      tab: null,
      busstopName: this.content.busstop_name,
      poles: this.content.poles
    }
  },
  methods: {
    isPlatformNumber(value) {
      return value !== "のりば番号設定なし"
    }
  }

}
</script>

<style scoped>
</style>