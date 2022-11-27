<template>
  <div class="nav">
    <atoms-atom-back-button />
    <router-link to="/" exact active-class="active">Home</router-link>
    <router-link to="/about" active-class="active">About</router-link>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
}
.active {
  background: red;
  color: #000;
}
</style>
