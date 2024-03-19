<script setup>
import VModal from '@/components/VModal.vue'
import VButton from '@/components/VButton.vue'

// stores
import { useSettingsStore } from '@/stores/settings'
const settings = useSettingsStore()

// props
defineProps({
    openModal: {
        type: Boolean
    }
})
</script>

<template>
    <transition name="modal">
        <v-modal title="Register" @close-modal="$emit('close-modal')" v-if="openModal">
            <div class="section">
                <h1 class="modal-title">Country</h1>
                <div class="grid">
                    <button
                        class="select"
                        v-for="(country, index) in settings.availableCountries"
                        :key="index"
                        :class="{ selected: country === settings.country }"
                        @click="settings.changeCountry(country)"
                    >
                        <img
                            :src="`/icons/flags/${country.toLowerCase()}-rectangle.svg`"
                            :alt="`${country}-flag`"
                        />
                        <span>{{ $i18n.messages[$i18n.locale].countries[country] }}</span>
                        <i class="icon">check</i>
                    </button>
                </div>
            </div>
            <div class="section">
                <h1 class="modal-title">Language</h1>
                <div class="grid">
                    <button
                        class="select"
                        v-for="(locale, index) in settings.availableLocales"
                        :key="index"
                        :class="{ selected: locale === settings.locale }"
                        @click="settings.changeLocale(locale)"
                    >
                        <span>{{ $i18n.messages[locale].localeName }}</span>
                        <i class="icon">check</i>
                    </button>
                </div>
            </div>
            <div class="section">
                <h1 class="modal-title">Currency</h1>
                <div class="grid">
                    <button
                        class="select"
                        v-for="(currency, index) in settings.availableCurrencies"
                        :key="index"
                        :class="{ selected: currency === settings.currency }"
                        @click="settings.changeCurrency(currency)"
                    >
                        <span
                            >{{ currency }} ·
                            {{ $i18n.messages[$i18n.locale].currencies[currency] }}</span
                        >
                        <i class="icon">check</i>
                    </button>
                </div>
            </div>
            <template v-slot:footer>
                <v-button class="filled primary" @click="$emit('close-modal')"
                    >Save changes</v-button
                >
            </template>
        </v-modal>
    </transition>
</template>

<style lang="stylus" scoped>
.modal-title
    // container
    height: 24px
    padding: 0 $gap-tn
    // text
    font-size: 18px
    font-weight: 560
    font-family: $family-display
    color: $text-light

.section
    display: flex
    flex-direction: column
    gap: $gap-sm

.grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: $gap-sm

// button select

.select
    // layout
    display: flex
    flex-direction: row
    align-items: center
    // styles
    height: 40px
    gap: $gap-sm
    padding: 0 $gap-sm
    border-radius: $radius-sm
    background: $element-foreground
    // text
    font-size: 14px
    font-weight: 420
    color: $text-primary
    // before animation
    opacity: .6
    .icon
        opacity: 0
    // animation
    transition: opacity .2s ease-in-out
    .icon
        transition: opacity .2s ease-in-out

    &.selected
        opacity: 1
        .icon
            opacity: 1

    span
        width: 100%
        text-align: start
        text-overflow(1)

    img
        width: 24px
</style>
