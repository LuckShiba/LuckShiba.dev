<template>
  <div class="container">
    <span class="main-text">LuckShiba</span>
    <span class="description">Just a newbie developer</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-text {
  font-size: 100pt;
  color: #777da7;
}

.description {
  font-size: 20pt;
}
</style>
