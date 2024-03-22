<!--入力フォーム-->
<template>
  <v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
          v-model="busStop"
          :rules="rules"
          label="バス停"
      ></v-text-field>

      <v-btn
          :loading="loading"
          class="mt-2"
          text="検索"
          type="submit"
          block
      ></v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import router from "@/router";
import axios from 'axios';

export default {
  data: vm => ({
    loading: false,
    rules: [value => vm.checkApi(value)],
    timeout: null,
    busStop: '',
    apiValid: false
  }),

  methods: {
    async submit(event) {
      this.loading = true
      await event

      this.loading = false

    },
    async checkApi(userName) {
      return new Promise(resolve => {
        clearTimeout(this.timeout)

        // フォームが空の場合はAPI叩く前に弾く
        if (!userName) {
          return resolve('入力必須です。')
        }

        // バス停の存在確認をAPIを叩いて行う
        let results = false
        axios.get("https://bus-location-api.fly.dev/bus/check?name=" + this.busStop)
            .then(response => results = response.data)
        this.timeout = setTimeout(() => {

          if (!results) {
            return resolve('バス停が見つかりません。')
          }
          // queryにはクエリパラメータを入れられる。
          router.push({name: "Result", query: {name: this.busStop}})
          // router.push("/result?name="+this.busStop)
        }, 1000)
      })
    },
  },
}
</script>
