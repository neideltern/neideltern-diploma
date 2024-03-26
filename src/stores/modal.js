import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const settingsModal = ref(false)
    const registerModal = ref(false)
    const signInModal = ref(false)

    function openSettings() {
        settingsModal.value = true
        registerModal.value = false
        signInModal.value = false
    }

    function openRegister() {
        settingsModal.value = false
        registerModal.value = true
        signInModal.value = false
    }

    function openSignIn() {
        settingsModal.value = false
        registerModal.value = false
        signInModal.value = true
    }

    function closeModal() {
        settingsModal.value = false
        registerModal.value = false
        signInModal.value = false
    }

    return {
        settingsModal,
        registerModal,
        signInModal,
        openRegister,
        openSignIn,
        openSettings,
        closeModal
    }
})
