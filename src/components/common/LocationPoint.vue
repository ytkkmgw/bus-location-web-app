<template>
  <v-timeline-item v-if="now" size="x-small" dot-color="red" icon="mdi-chevron-left">
    <div class="busstop">{{ locationLabel }}</div>
  </v-timeline-item>
  <v-timeline-item v-else size="x-small">
    <div class="busstop">{{ locationLabel }}</div>
  </v-timeline-item>

</template>

<script>

export default {
  name: 'LocationPoint',
  props: ['label', 'now'],
  data() {
    // dataオプション
    // return内にデータを記述する
    return {
      locationLabel: this.label,
    }
  },
}

</script>

<style scoped>
.busstop {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
}
</style>