<template>
  <div class="container">
    <img :src="`https://http.cat/${error.statusCode}`" />
  </div>
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Error extends Vue {
  @Prop() error!: NuxtError
}
</script>

<style scoped>
img {
  height: 80vh;
}
</style>
