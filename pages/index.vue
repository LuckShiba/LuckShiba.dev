<template>
  <div class="container">
    <span class="main-text">LuckShiba</span>
    <span class="description">Just a newbie developer</span>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  overflow: hidden;
}
.main-text {
  font-size: 100pt;
  color: transparent;
  background: linear-gradient(
    to right,
    var(--rhythm),
    var(--maximum-blue-green),
    var(--rhythm),
    var(--maximum-blue-green)
  );
  background-size: 400% 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 15s linear running infinite gradient;
}

@media (max-width: 720px) {
  .main-text {
    font-size: 18vw;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.description {
  font-size: 20pt;
  color: var(--text);
}
</style>
