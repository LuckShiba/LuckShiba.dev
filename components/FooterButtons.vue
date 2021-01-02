<template>
  <footer>
    <div class="color" @click="colorClick">
      <Fa :icon="['far', icon]" />
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FooterButtons extends Vue {
  get isDark() {
    return this.$colorMode.value === 'dark'
  }

  get icon() {
    return this.isDark ? 'moon' : 'lightbulb'
  }

  colorClick() {
    this.$colorMode.preference = this.isDark ? 'light' : 'dark'
  }
}
</script>

<style scoped>
footer {
  position: fixed;
  margin: 10px 5px;
  bottom: 0;
  right: 0;
}
.color {
  width: 40px;
  height: 40px;
  border: 2px solid var(--text);
  color: var(--text);
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  cursor: pointer;
}
.color:hover {
  transition: all 0.2s;
  background-color: var(--text);
  color: var(--background);
}
</style>
