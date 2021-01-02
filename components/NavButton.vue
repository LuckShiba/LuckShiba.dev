<template>
  <NuxtLink :to="to" class="nav-button">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class NavButton extends Vue {
  @Prop() to!: string
}
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
  color: var(--text);
  transition: all 0.3s;
}

.nav-button:hover,
.nuxt-link-exact-active {
  background-color: var(--secondary);
  color: var(--background);
}
</style>
