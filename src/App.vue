<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/VHeader/VHeader.vue'
// modals
import SettingsModal from '@/modals/SettingsModal.vue'
import RegisterModal from '@/modals/RegisterModal.vue'
import SignInModal from '@/modals/SignInModal.vue'
// modals store
import { useModalStore } from '@/stores/modal'
const modal = useModalStore()
</script>

<template>
    <VHeader />
    <RouterView />
    <teleport to="#modal">
        <SettingsModal :open-modal="modal.settingsModal" @close-modal="modal.closeModal" />
        <RegisterModal :open-modal="modal.registerModal" @close-modal="modal.closeModal" />
        <SignInModal :open-modal="modal.signInModal" @close-modal="modal.closeModal" />
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
