<template>
  <div class="bg-green-100 sticky top-0 left-0 py-1">
    <nav class="container mx-auto flex gap-[20px] justify-center">
      <router-link to="/" exact active-class="text-green-500 font-bold">Home</router-link>
      <router-link to="/about" active-class="text-green-500 font-bold">About</router-link>
    </nav>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
