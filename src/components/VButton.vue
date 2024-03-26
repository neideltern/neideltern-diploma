<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="stylus" scoped>
.button
    // layout
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    // styles
    height: 40px
    width: 100%
    border-radius: $radius-md
    // text
    font-size: 14px
    font-weight: 420
    font-family: $family-text

    &.filled.primary
        color: $text-primary
        background: $accent-blue
</style>
