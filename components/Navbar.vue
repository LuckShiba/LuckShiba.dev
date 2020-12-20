<template>
  <div class="navbar">
    <slot />
  </div>
</template>

<style scoped>
.navbar {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
}
</style>
