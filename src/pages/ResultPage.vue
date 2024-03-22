<template>
  <v-container>
    <div align="center" v-if="loading">
      読み込み中<br>
      ※処理に数分かかる場合があります

      <v-progress-linear v-if="loading"
                         color="blue"
                         indeterminate
      ></v-progress-linear>
    </div>
    <div v-if="!loading">
      {{ body }}
    </div>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AdviceView',
  props: route => ({
    name: route.query.name
  }),
  data() {
    // dataオプション
    // return内にデータを記述する
    return {
      body: null,
      loading: true
    }
  },

  mounted() {
    axios.get("https://bus-location-api.fly.dev/bus/?name=石神井公園駅北口")
        .then(response => (this.body = response.data))
        // .catch(response =>
        //     alert("サーバ内エラーが発生しました。:"+response.data)
        // )
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>