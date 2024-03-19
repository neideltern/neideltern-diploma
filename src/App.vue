<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/VHeader/VHeader.vue'
import SettingsModal from '@/modals/SettingsModal.vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()
</script>

<template>
    <VHeader />
    <RouterView />
    <teleport to="#modal">
        <SettingsModal :open-modal="modal.settingsModal" @close-modal="modal.closeModal" />
    </teleport>
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

button
    cursor: pointer
    user-select: none

body
    background: $body-background
    color: $text-primary
    font-family: $family-text
</style>
