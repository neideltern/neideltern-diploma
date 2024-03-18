<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="modal-outer">
        <div class="modal-overlay" @click="$emit('closeModal')"></div>
        <div class="modal">
            <div class="modal-header">
                <h1 class="modal-title">{{ title }}</h1>
                <button class="icon modal-close" @click="$emit('closeModal')">cross</button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
// modal animation

.modal-enter-active,
.modal-leave-active
    transition: all .4s
    .modal-overlay
        transition: opacity .2s ease-in-out
    .modal
        transition: transform .4s ease-in-out

.modal-enter-from
.modal-leave-to
    .modal-overlay
        opacity: 0
    .modal
        transform: translateX(512px)

// layout
    
.modal-outer
    cursor: pointer
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%

.modal-overlay
    background: opacify(#000, .4)
    position: absolute
    z-index: 1
    top: 0
    left: 0
    width: 100%
    height: 100%

.modal
    cursor: default
    position: absolute
    z-index: 2
    top: 0
    right: 0
    width: 100%
    height: 100%
    width: 512px
    padding: $modal-padding-ver $modal-padding-hor
    border-radius: $radius-lg 0 0 $radius-lg
    background: $element-background
    display: flex
    flex-direction: column
    gap: $gap-lg

.modal-body
    flex-grow: 1
    overflow: overlay

// modal header

.modal-header
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    font-size: 24px
    padding: 0 $gap-tn

.modal-title
    line-height: 1
    font-size: inherit
    font-weight: 640
    font-family: $family-display
    color: $text-primary

.modal-close
    font-size: inherit
    color: $text-tertiary
</style>
