<script setup>
import { ref } from 'vue'

defineProps({
    id: String,
    disabled: Boolean
})

const isFocused = ref(false)

// country code

const isDropdownOpened = ref(false)
const countries = ref({
    us: {
        abbr: 'us',
        mask: '(000) 000 - 0000',
        code: '+1'
    },
    uk: {
        abbr: 'uk',
        mask: '(000) 000 - 0000',
        code: '+44'
    },
    de: {
        abbr: 'de',
        mask: '(000) 000 - 0000',
        code: '+49'
    },
    fr: {
        abbr: 'fr',
        mask: '(000) 000 - 0000',
        code: '+33'
    },
    ie: {
        abbr: 'ie',
        mask: '(000) 000 - 0000',
        code: '+353'
    },
    ca: {
        abbr: 'ca',
        mask: '(000) 000 - 0000',
        code: '+1'
    },
    au: {
        abbr: 'au',
        mask: '(000) 000 - 0000',
        code: '+61'
    },
    nz: {
        abbr: 'nz',
        mask: '(000) 000 - 0000',
        code: '+64'
    }
})

const selectedCountry = ref(countries.value.us)
</script>

<template>
    <div class="input" :class="{ focused: isFocused, disabled: disabled }" :inert="disabled">
        <div class="selector" @click="isDropdownOpened = !isDropdownOpened">
            <i class="icon">chevron-down</i>
            <img
                :src="`/icons/flags/${selectedCountry.abbr}-rectangle.svg`"
                :alt="`${selectedCountry.abbr}-flag`"
            />
            <span class="country-code">{{ selectedCountry.code }}</span>
        </div>
        <input
            type="number"
            :id="id"
            :placeholder="selectedCountry.mask"
            @focus="isFocused = true, isDropdownOpened = false"
            @blur="isFocused = false"
        />
        <transition name="dropdown">
            <div class="dropdown" v-if="isDropdownOpened">
                <button
                    class="dropdown-item"
                    :class="{ selected: selectedCountry == country }"
                    v-for="(country, index) in countries"
                    :key="index"
                    @click="(selectedCountry = country), (isDropdownOpened = false)"
                >
                    <i class="icon">dot</i>
                    <img
                        :src="`/icons/flags/${country.abbr}-rectangle.svg`"
                        :alt="`${country.abbr}-flag`"
                    />
                    <span class="country-name">{{ $t(`countries.${country.abbr}`) }}</span>
                    <span class="country-code">{{ country.code }}</span>
                </button>
            </div>
        </transition>
    </div>
</template>

<style lang="stylus" scoped>
@import "../src/assets/stylus/components/fields.styl"

.input
    position: relative
    gap: $gap-tn

// selector

.selector
    cursor: pointer
    // layout
    display: flex
    flex-direction: row
    align-items: center
    // styles
    gap: $gap-tn
    font-size: 14px
    font-weight: 420
    color: $text-secondary

    img
        height: 14px

// dropdown

.dropdown
    // position
    position: absolute
    top: 100% + $gap-tn
    left: 0
    width: 100%
    // layout
    display: flex
    flex-direction: column
    height: 150px
    overflow: overlay
    box-shadow: 0 6px 32px transparentify($element-foreground-darken, .24)
    // styles
    gap: $gap-tn
    padding: $gap-tn
    background: $element-foreground
    border-radius: $radius-md

.dropdown-item
    // layout
    flex-grow: 1
    display: flex
    flex-direction: row
    align-items: center
    // styles
    height: 32px
    gap: $gap-tn
    padding: $gap-tn
    // text styles
    font-size: 14px
    font-weight: 420
    color: $text-secondary

    img
        height: 14px

    &.selected
        border-radius: $radius-sm
        background: $element-foreground-darken

// dropdown animation

.dropdown-enter-active,
.dropdown-leave-active
    transition: opacity .2s ease-in-out

.dropdown-enter-from
.dropdown-leave-to
    opacity: 0
</style>
