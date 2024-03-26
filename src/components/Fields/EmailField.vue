<script setup>
import { ref } from 'vue'

defineProps({
    id: String,
    placeholder: String,
    disabled: Boolean
})

const isFocused = ref(false)
</script>

<template>
    <div class="input" :class="{ focused: isFocused, disabled: disabled }" :inert="disabled">
        <input
            type="email"
            :id="id"
            :placeholder="placeholder"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
    </div>
</template>

<style lang="stylus" scoped>
.input
    // layout
    display: flex
    flex-direction: row
    align-items: center
    // styles
    height: 40px
    gap: $gap-tn
    padding: 0 $gap-sm
    background: $element-foreground
    box-shadow: inset 0 0 0 1px transparent
    border-radius: $radius-md
    // text styles
    font-size: 14px
    font-weight: 420
    color: $text-secondary
    // animation
    transition: background .2s ease-in-out, box-shadow .2s ease-in-out

    // children
    input
        height: 100%
        width: 100%
        color: inherit

        &:placeholder
            color: $text-dark

    // states
    &.focused
        background: $element-foreground-darken
        box-shadow: inset 0 0 0 1px $element-foreground

    &.disabled
        opacity: .6
</style>
