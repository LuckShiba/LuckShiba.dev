<template>
  <div class="layout">
    <Navbar>
      <NavButton v-for="page of pages" :key="page.name" :to="page.to">{{
        page.name
      }}</NavButton>
    </Navbar>
    <main>
      <Nuxt />
    </main>
    <FooterButtons />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  pages = [
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
  ].map(({ name, to }) => ({ name, to: to ?? name.toLowerCase() }))
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity, 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
