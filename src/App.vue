<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="stylus">
*
    padding: 0
    margin: 0
    min-width: 0
    border: none
    outline: none
    background: none
    box-sizing: border-box
    text-decoration: none
    font-family: inherit
    -webkit-tap-highlight-color: transparent

body
    background: $body-background
    color: $text-primary
    font-family: $family-text
</style>
