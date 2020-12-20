<template>
  <div>
    <div class="navbar">
      <NuxtLink to="/projects" class="nav-button">Projects</NuxtLink>
      <NuxtLink to="/about" class="nav-button">About</NuxtLink>
    </div>
    <Nuxt />
  </div>
</template>

<style scoped>
.navbar {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
}

.nav-button {
  margin: 10px 5px;
  border: 2px solid var(--secondary);
  border-radius: 20px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: all 0.3s;
}

.nav-button:hover {
  background-color: var(--secondary);
  color: white;
}
</style>

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
