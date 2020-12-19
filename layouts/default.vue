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
  position: absolute;
}

.nav-button {
  margin: 10px 5px;
  border: 2px solid #777da7;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.nav-button:hover {
  background-color: #777da7;
  color: white;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');
html {
  font-family: 'Fira Code', monospace;
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}
</style>
