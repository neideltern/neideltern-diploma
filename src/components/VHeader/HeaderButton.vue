<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    path: {
        type: String,
        require: true,
    },
    icon: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    }
})
</script>

<template>
    <RouterLink :to="path" class="header-button">
        <i class="icon">{{ icon }}</i>
        <span>{{ text }}</span>
    </RouterLink>
</template>

<style lang="stylus" scoped>
.header-button
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: $gap-xs

    i
        font-size: 24px
        color: $text-secondary

    span
        color: $text-tertiary
        line-height: 1
        font-size: 14px
        font-weight: 560
        font-family: $family-display
</style>