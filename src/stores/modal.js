import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modal', () => {
    const settingsModal = ref(false)

    function openSettings() {
        settingsModal.value = true
    }

    function closeModal() {
        settingsModal.value = false
    }
    
    return {settingsModal, openSettings, closeModal}
})