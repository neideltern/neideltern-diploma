<script setup>
defineProps({
    placeholder: {
        type: String
    },
    icon: {
        type: String
    }
})
</script>

<template>
    <div class="input">
        <input type="text" :placeholder />
        <i class="icon" v-if="icon">{{ icon }}</i>
    </div>
</template>

<style lang="stylus">
.input
    display: flex
    align-items: center
    height: 40px
    gap: $gap-tn
    padding: $gap-tn $gap-sm
    border-radius: $radius-md
    background: $element-foreground

    input
        height 100%
        flex-grow: 1
</style>
