<script setup>
import { RouterLink } from 'vue-router'
import HeaderButton from '@/components/VHeader/HeaderButton.vue'
import VInput from '@/components/VInput.vue'
</script>

<template>
    <header class="header">
        <div class="top-bar">
            <RouterLink to="/" class="link">Payment</RouterLink>
            <RouterLink to="/" class="link">Shipping</RouterLink>
            <RouterLink to="/" class="link">Warranty</RouterLink>
            <RouterLink to="/" class="link">Support</RouterLink>
        </div>
        <nav class="nav-bar">
            <RouterLink to="/" class="logo">Technomance</RouterLink>
            <VInput placeholder="Search..." icon="search" />
            <HeaderButton path="/builder" icon="builder" text="Builder" />
            <HeaderButton path="/compare" icon="compare" text="Compare" />
            <HeaderButton path="/favorite" icon="favorite" text="Favorite" />
            <HeaderButton path="/profile" icon="account" text="Profile" />
        </nav>
        <div class="categories">
            <HeaderButton path="/categories" icon="categories" text="All categories" />
            <HeaderButton path="/categories/gadgets" icon="mobile" text="Gadgets" />
            <HeaderButton path="/categories/hardware" icon="hardware" text="PC hardware" />
            <HeaderButton path="/categories/brand-pc" icon="pc" text="Brand PCs" />
            <HeaderButton path="/categories/monitors" icon="monitor" text="Monitors" />
            <HeaderButton path="/categories/devices" icon="keyboard" text="PC devices" />
            <HeaderButton path="/categories/laptops" icon="laptop" text="Laptops" />
            <HeaderButton path="/categories/network" icon="router" text="Network" />
            <HeaderButton path="/categories/audio" icon="audio" text="Audio" />
            <HeaderButton path="/categories/other" icon="other" text="Other" />
        </div>
    </header>
</template>

<style lang="stylus" scoped>

// top-bar

.top-bar
    display: grid
    align-items: center
    grid-template-columns: repeat(12, 1fr)
    height: 32px
    gap: $gap-sm
    padding: $gap-tn $page-padding-hor
    background: $body-background

.link
    font-size: 12px
    font-weight: 420
    font-family: $family-mono
    color: $text-tertiary

// nav-bar

.nav-bar
    display: grid
    align-items: center
    grid-template-columns: repeat(12, 1fr)
    height: 64px
    padding: $gap-tn $page-padding-hor
    gap: $gap-sm
    background: $element-background

    .input
        grid-column: 5 / 9

.logo
    grid-column: 1 / 3
    color: $text-primary
    font-family: $family-display
    font-size: 24px
    font-weight: 640
    line-height: 1

// categories

.categories
    display: grid
    grid-template-columns: repeat(12, 1fr)
    height: 64px
    padding: $gap-tn $page-padding-hor
    gap: $gap-sm

    .header-button:first-child
        grid-column-start: 2
</style>
