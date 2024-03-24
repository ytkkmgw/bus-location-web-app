<template>
  <v-container>
    <div align="center" v-if="loading">
      読み込み中<br>
      ※読み込みに数十秒程度かかる場合があります。そのままお待ち下さい。
      <v-progress-linear
          color="blue"
          indeterminate
      ></v-progress-linear>
    </div>
    <div v-if="!loading">
      <PoleTab :content="body"/>
    </div>
  </v-container>
  <router-link to="/" align="center">
    <v-btn>トップページに戻る</v-btn>
  </router-link>

</template>
<script>
import axios from 'axios';
import PoleTab from "@/components/common/PoleTab.vue";

export default {
  name: 'AdviceView',
  components: {PoleTab},
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
    axios.get(`https://bus-location-api.fly.dev/bus/?name=${this.$route.query.name}`)
        // axios.get(`http://127.0.0.1:8000/bus/?name=${this.$route.query.name}`)

        .then(response => (this.body = response.data, console.log(response.data)))
        // TODO APIアクセス失敗したらトップ画面に遷移するようにしたい
        // .catch(response =>
        //     alert("サーバ内エラーが発生しました。:"+response.data),
        //     router.push("/")
        // )
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>