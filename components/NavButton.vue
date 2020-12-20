<template>
  <NuxtLink :to="to" class="nav-button">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.nav-button {
  margin: 10px 5px;
  border: 2px solid var(--secondary);
  border-radius: 20px;
  min-width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--oxford-blue);
  transition: all 0.3s;
}

.nav-button:hover,
.nuxt-link-exact-active {
  background-color: var(--secondary);
  color: white;
}
</style>
