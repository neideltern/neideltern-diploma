<script setup>
import VModal from '@/components/VModal.vue'
import EmailInput from '@/components/Fields/EmailField.vue'
import PasswordInput from '@/components/Fields/PasswordField.vue'
import VButton from '@/components/VButton.vue'

defineProps({
    openModal: {
        type: Boolean
    }
})

// store
import { useModalStore } from '@/stores/modal'
const modal = useModalStore()
</script>

<template>
    <transition name="modal">
        <v-modal title="Sign in" @close-modal="$emit('close-modal')" v-if="openModal">
            <form class="input-form" onsubmit="return false">
                <div class="input-group">
                    <label class="input-label" for="signin-email">Email address</label>
                    <EmailInput id="signin-email" placeholder="address@mail.com" />
                </div>
                <div class="input-group">
                    <label class="input-label" for="signin-password">Password</label>
                    <PasswordInput id="signin-password" placeholder="Password" />
                </div>
                <div class="text-group">
                    <p class="input-text">
                        Need help?
                        <button class="input-link">Support</button>
                    </p>
                    <p class="input-text">
                        Forgot password?
                        <button class="input-link">Recovery</button>
                    </p>
                </div>
                <v-button class="filled primary">Sign in</v-button>
            </form>
            <template v-slot:footer>
                <div class="continue-with">
                    <p class="input-text">
                        Don’t have an account?
                        <button class="input-link" @click="modal.openRegister()">Register</button>
                    </p>
                    <div class="continue-divider">
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                    <div class="continue-buttons">
                        <button class="continue-button">
                            <i class="icon">google</i>
                        </button>
                        <button class="continue-button">
                            <i class="icon">apple</i>
                        </button>
                        <button class="continue-button">
                            <i class="icon">facebook</i>
                        </button>
                    </div>
                </div>
            </template>
        </v-modal>
    </transition>
</template>

<style lang="stylus" scoped>
.input-form
    display: flex
    flex-direction: column
    gap: $gap-md

.input-group
    display: flex
    flex-direction: column
    gap: $gap-sm

.input-label
    // container
    padding: 0 $gap-tn
    // text styles
    font-size: 16px
    font-weight: 420
    line-height: 1
    color: $text-light
    text-overflow(1)

.input-text
    // container
    text-align: center
    padding: 0 $gap-tn
    // text styles
    font-size: 14px
    font-weight: 420
    line-height: 1.4
    color: $text-tertiary

.text-group
    display: flex
    flex-direction: row
    justify-content: space-between

.input-link
    text-decoration: underline
    color: $accent-blue

// continue with

.continue-with
    display: flex
    flex-direction: column
    gap: $gap-md

.continue-divider
    display flex
    flex-direction: row
    align-items: center
    gap: $gap-sm
    padding: 0 $gap-tn

    span
        font-size: 16px
        font-weight: 420
        line-height: 1
        color: $text-tertiary

    hr
        flex-grow: 1
        height: 1px
        background: $element-foreground

.continue-buttons
    display: flex
    flex-direction: row
    gap: $gap-sm

.continue-button
    // layout
    flex-grow: 1
    display: flex
    align-items: center
    justify-content: center
    // styles
    height: 60px
    border-radius: $radius-md
    background: $element-foreground
    // icon styles
    font-size: 24px
    color: $text-primary
</style>
