<script setup>
import { ref } from 'vue'

defineProps({
    id: {
        type: String,
        default: null
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ''
    }
})

const isFocused = ref(false)
</script>

<template>
    <div class="input" :class="{ focused: isFocused, disabled: disabled }" :inert="disabled">
        <i class="icon">search</i>
        <input
            type="text"
            :id="id"
            :placeholder="$t('header.search') + '...'"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
        <button class="icon" v-if="modelValue" @mousedown="$emit('update:modelValue', '')">
            cross
        </button>
    </div>
</template>

<style lang="stylus" scoped>
@import '../src/assets/stylus/components/fields.styl'
</style>