<!--トップページ-->
<template>
  <v-container>
    <InputForm/>
  <router-link to="/result">Go to home</router-link>
    </v-container>
</template>

<script>
import InputForm from "@/components/common/InputForm.vue";

export default {
  name: 'HomeView',
  components: {
    InputForm,
  }
}
</script>
