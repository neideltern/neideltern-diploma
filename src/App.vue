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
body
    background: $body-background
    color: $text-primary
    font-family: $family-text
    overflow-y: hidden
    overflow-x: overlay
</style>
