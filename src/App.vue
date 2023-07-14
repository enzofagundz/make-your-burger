<template>
  <NavbarComponent />
  <main class="container">
    <RouterView />
  </main>

  <FooterComponent />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { FooterComponent, NavbarComponent } from './components'

</script>

<style>

</style>