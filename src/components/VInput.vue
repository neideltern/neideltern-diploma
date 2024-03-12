<script setup>
defineProps({
    placeholder: {
        type: String
    },
    icon: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="input" :inert="disabled">
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
    box-shadow: inset 0 0 0 1px transparent
    font-size: 14px
    // animation
    transition: background .2s ease-in-out, box-shadow .2s ease-in-out

    &:focus-within
        background: $element-foreground-darken
        box-shadow: inset 0 0 0 1px $element-foreground

    &[inert]
        opacity: .6

    input
        height 100%
        flex-grow: 1
        line-height: 1
        font-weight: 420
        font-family: $family-text
        color: $text-secondary

        &:placeholder
            color: $text-dark

    .icon
        color: $text-tertiary

    
</style>
