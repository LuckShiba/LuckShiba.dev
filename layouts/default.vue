<template>
  <div>
    <Navbar>
      <NavButton v-for="page of pages" :key="page.name" :to="page.to">{{
        page.name
      }}</NavButton>
    </Navbar>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    pages: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'Projects',
      },
      {
        name: 'About',
      },
    ].map(({ name, to }) => ({ name, to: to ?? name.toLowerCase() })),
  }),
})
</script>

<style>
html {
  font-family: 'Fira Code', monospace;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

:root {
  --oxford-blue: #0b132b;
  --space-cadet: #1c2541;
  --rhythm: #777da7;
  --maximum-blue-green: #5bc0be;
  --turquoise-blue: #6fffe9;
  --primary: var(--rhythm);
  --secondary: var(--maximum-blue-green);
  --background: #f1f1f1;
}

.page-enter-active,
.page-leave-active {
  transition: transform 0.5s;
}

.page-enter {
  transform: translateX(100%);
}

.page-leave-to {
  transform: translateX(-100%);
}
</style>
