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
@import '../src/assets/stylus/components/fields.styl'
</style>
