<!--入力フォーム-->
<template>
  <v-sheet class="mx-auto" max-width="500">
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
      <br>
      <v-card>
        <v-container>
          主要なバス停
          <v-chip-group column mandatory>
            <v-chip class=" ga-2 mt-2" v-for="item in mainBusstopList" :key="item" @click="input(item)">
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-container>
      </v-card>
    </v-form>
    <br>
    <TopInformation/>
  </v-sheet>
</template>

<script>
import router from "@/router";
import axios from 'axios';
import TopInformation from "@/components/common/TopInformation.vue";


export default {
  components: {TopInformation},
  data: vm => ({
    loading: false,
    rules: [value => vm.validation(value)],
    timeout: null,
    busStop: null,
    apiValid: false,
    mainBusstopList: [
      "練馬駅北口",
      "練馬高野台駅",
      "石神井公園駅北口",
      "石神井公園駅南口",
      "大泉学園駅北口",
      "大泉学園駅南口",
      "保谷駅南口",
      "ひばりヶ丘駅",
      "東久留米駅西口",
      "光が丘駅",
      "荻窪駅",
      "吉祥寺駅",
      "三鷹駅",
      "武蔵境駅",
      "武蔵小金井駅",
      "成増駅南口",
      "和光市駅南口",
      "上石神井駅",
      "田無駅",
      "花小金井駅",
    ]
  }),

  methods: {
    input(value) {
      this.busStop = value
    },

    async submit(event) {
      this.loading = true
      await event

      this.loading = false

    },
    async validation(userName) {
      return new Promise(resolve => {
        clearTimeout(this.timeout)

        // フォームが空の場合はAPI叩く前に弾く
        if (!userName) {
          return resolve('入力必須です。')
        }

        // バス停の存在確認をAPIを叩いて行う
        let results = false
        axios.get("https://bus-location-api.fly.dev/bus/check?name=" + this.busStop)
            // axios.get("http://127.0.0.1:8000/bus/check?name=" + this.busStop)

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
