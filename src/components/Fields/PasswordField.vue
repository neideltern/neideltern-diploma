<script setup>
import { ref } from 'vue'

defineProps({
    id: String,
    placeholder: String,
    disabled: Boolean
})

const isFocused = ref(false)
const isMasked = ref(true)
</script>

<template>
    <div class="input" :class="{ focused: isFocused, disabled: disabled }" :inert="disabled">
        <input
            :type="isMasked ? 'password' : 'text'"
            :id="id"
            :placeholder="placeholder"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
        <button class="icon" @click="isMasked = !isMasked">
            {{ isMasked ? 'eye' : 'eye-slash' }}
        </button>
    </div>
</template>

<style lang="stylus" scoped>
@import "../src/assets/stylus/components/fields.styl"
</style>
