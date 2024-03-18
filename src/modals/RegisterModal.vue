<script setup>
import VModal from '@/components/VModal.vue'

defineProps({
    openModal: {
        type: Boolean
    }
})
</script>

<template>
    <transition name="modal">
        <v-modal title="Register" @close-modal="$emit('close-modal')" v-if="openModal">

        </v-modal>
    </transition>
</template>