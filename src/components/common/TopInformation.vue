<template>
  <v-alert
    title="Information"
    type="info"
    variant="tonal"
  >
    ・対応している会社は<b>西武バス</b>のみです。<br>
    ・バス停名は完全一致です。<br>
    ・サーバー側の仕様でスリープ状態になることがあります。その場合、アクセスしてから画面が表示されるまで時間がかかる場合があります。
  </v-alert>
</template>

<script>
export default {
  name: 'TopInformation',
}
</script>

<style scoped>
</style>