<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderButton from '@/components/VHeader/HeaderButton.vue'

// search input
import SearchField from '@/components/Fields/SearchField.vue'
const search = ref('')

// modals
import { useModalStore } from '@/stores/modal'
import { useSettingsStore } from '@/stores/settings'
const modal = useModalStore()
const settings = useSettingsStore()
</script>

<template>
    <header class="header">
        <div class="top-bar">
            <div class="links">
                <RouterLink to="/" class="link">Payment</RouterLink>
                <RouterLink to="/" class="link">Shipping</RouterLink>
                <RouterLink to="/" class="link">Warranty</RouterLink>
                <RouterLink to="/" class="link">Support</RouterLink>
            </div>
            <div class="controls">
                <button class="dropdown settings" @click="modal.openSettings">
                    <img
                        class="country-flag"
                        :src="`/icons/flags/${settings.currentCountry}-round.svg`"
                        :alt="`${settings.currentCountry}-flag`"
                    />
                    <span class="currency">{{ settings.currentCurrency }}</span>
                    <span class="divider">·</span>
                    <span class="language">{{ $t('localeName') }}</span>
                    <i class="icon">chevron-down</i>
                </button>
                <div class="dropdown profile">
                    <i class="icon profile-icon">account</i>
                    <button class="sign-in" @click="modal.openSignIn()">Sign in</button>
                    <span class="divider">·</span>
                    <button class="register" @click="modal.openRegister()">Register</button>
                    <i class="icon">chevron-down</i>
                </div>
            </div>
        </div>
        <nav class="nav-bar">
            <RouterLink to="/" class="logo">Technomance</RouterLink>
            <SearchField v-model="search" />
            <div class="buttons">
                <HeaderButton path="/builder" icon="builder" text="Builder" />
                <HeaderButton path="/compare" icon="compare" text="Compare" />
                <HeaderButton path="/favorite" icon="favorite" text="Favorite" />
                <HeaderButton path="/cart" icon="cart" text="Cart" />
            </div>
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
    grid-template-columns: repeat(3, 1fr)
    height: 32px
    gap: $gap-sm
    padding: $gap-tn $page-padding-hor
    background: $body-background

.links
    grid-column: 1/2
    display: grid
    grid-auto-flow: column
    gap: $gap-sm

.link
    font-size: 12px
    font-weight: 420
    font-family: $family-mono
    color: $text-tertiary

.controls
    grid-column: 3/4
    display: grid
    grid-template-columns: repeat(2, 1fr)
    justify-items: end
    gap: $gap-sm

.dropdown
    display: flex
    flex-direction: row
    align-items: center
    justify-content: end
    gap: $gap-tn
    width: max-content
    line-height: 1
    font-size: 14px
    font-weight: 420
    color: $text-tertiary

    .country-flag
        height: 18px
        width: 18px

    .profile-icon
        font-size: 18px

// nav-bar

.nav-bar
    display: grid
    align-items: center
    grid-template-columns: repeat(3, 1fr)
    height: 64px
    padding: $gap-tn $page-padding-hor
    gap: $gap-sm
    background: $element-background

.logo
    grid-column: 1 / 2
    width: max-content
    color: $text-primary
    font-family: $family-display
    font-size: 24px
    font-weight: 640
    line-height: 1

.buttons
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: $gap-sm

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
