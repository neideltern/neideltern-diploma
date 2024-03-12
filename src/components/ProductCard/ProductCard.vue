<script setup>
defineProps({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    badges: {
        type: Object
    },
    colors: {
        type: Object
    },
    variants: {
        type: Object
    },
    reviews: {
        type: Number,
        default: 0
    },
    pricePrimary: {
        type: String,
        required: true
    },
    priceSecondary: {
        type: String
    }
})
</script>

<template>
    <div class="product-card">
        <picture class="thumbnail">
            <img :src="thumbnail" alt="product-thumbnail" />
            <div class="inner">
                <div class="header">
                    <div class="badges" v-if="badges">
                        <div class="badge new" v-if="badges.new">New!</div>
                        <div class="badge discount" v-if="badges.discount">
                            -{{ badges.discount }}%
                        </div>
                        <div class="badge promocode" v-if="badges.promocode">
                            {{ badges.promocode }}
                        </div>
                    </div>
                    <div class="colors" v-if="colors">
                        <button class="color" v-for="(color, index) in colors" :key="index">
                            <div :style="{ background: color }"></div>
                        </button>
                    </div>
                </div>
                <div class="variants" v-if="variants">
                    <button class="variant" v-for="(variant, index) in variants" :key="index">
                        {{ variant }}
                    </button>
                </div>
            </div>
        </picture>
        <div class="body">
            <h1 class="title">{{ title }}</h1>
            <div class="t-center">
                <div class="rating">
                    <span class="reviews"><i class="icon">comment</i>{{ reviews }}</span>
                </div>
                <div class="status">in stock</div>
            </div>
            <div class="t-end">
                <div class="price">
                    <span class="price-primary">{{ pricePrimary }}</span>
                    <span class="price-secondary">{{ priceSecondary }}</span>
                </div>
                <div class="buttons">
                    <button class="button-secondary compare"><i class="icon">compare</i></button>
                    <button class="button-secondary favorite"><i class="icon">favorite</i></button>
                    <button class="button-primary cart">To Cart <i class="icon">cart</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
// layout
.product-card
    display: flex
    flex-direction: column
    gap: $gap-sm

.inner
    position: relative
    z-index: 2
    padding: $gap-sm
    display: flex
    flex-direction: column
    justify-content: space-between

.header
    display: flex
    flex-direction: row
    justify-content: space-between
    width: 100%
    gap: $gap-sm

.body
    padding: 0 6px
    display: flex
    flex-direction: column
    flex-grow: 1
    gap: $gap-sm

.t-center
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: $gap-sm

.t-end
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: $gap-sm

// title

.title
    font-size: 18px
    font-weight: 560
    line-height: 1.2
    text-transform: capitalize
    flex-grow: 1

// thumbnail

.thumbnail
    background: $element-background
    border-radius: $radius-md
    width: 100%
    aspect-ratio: 1/1
    display: grid
    position: relative

    img
        position: absolute
        z-index: 1
        width: 100%
        height: 100%
        object-fit: contain

// badges

.badges
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 6px

.badge
    display: flex
    flex-direction: row
    align-items: center
    gap: $gap-tn
    padding: 0 $gap-sm
    height 24px
    font-size: 12px
    font-weight: 420
    font-family: $family-mono
    color: $text-primary
    border-radius: $radius-sm

    &.new
        background: $accent-blue

    &.discount
        background: $accent-red

    &.promocode
        background: $accent-purple

// colors

.colors
    display: flex
    flex-direction: row
    justify-content: end
    flex-wrap: wrap
    margin-left: auto
    gap: 6px

.color
    height: 24px
    width: 24px
    padding: 2px
    opacity: .6

    div
        height: 100%
        width: 100%
        border-radius: $radius-sm

    &.active
        padding: 0
        opacity: 1

// variants

.variants
    display: flex
    flex-direction: row
    margin-top: auto
    gap: $gap-tn

.variant
    height: 24px
    font-size: 12px
    font-weight: 420
    font-family: $family-text
    color: $text-secondary
    background: $element-foreground
    border-radius: $radius-sm
    display: flex
    align-items: center
    justify-content: center
    flex-grow: 1
    // animation
    opacity: .6
    transition: opacity .2s ease-in-out

    &.active
        opacity: 1

// rating

.reviews
    display: flex
    flex-direction: row
    align-items: center
    gap: $gap-xs
    color: $text-tertiary
    font-family: $family-mono
    font-size: 14px
    font-weight: 420

// price

.price
    display: flex
    flex-direction: row
    align-items: start
    gap: $gap-xs

.price-primary
    color: $text-primary
    font-family: $family-display
    font-size: 32px
    font-weight: 640
    line-height: 1

.price-secondary
    color: $text-tertiary
    font-family: $family-display
    font-size: 16px
    font-weight: 560
    line-height: 1.4
    text-decoration: line-through

// buttons

.buttons
    display: flex
    flex-direction: row
    margin-left: auto
    gap: $gap-tn

.button-secondary
    height: 32px
    aspect-ratio: 1
    display: grid
    place-items: center
    color: $text-secondary
    background: $element-foreground
    border-radius: $radius-sm
    // animation
    transition: color .2s ease-in-out, background .2s ease-in-out

    &.compare.active
        color: $accent-blue-lighten
        background: $accent-blue-darken

    &.favorite.active
        color: $accent-red-lighten
        background: $accent-red-darken

.button-primary
    height: 32px
    display: flex
    flex-direction: row
    align-items: center
    font-size: 14px
    line-height: 1
    gap: $gap-xs
    padding: 0 $gap-sm
    border-radius: $radius-sm
    // animation
    transition: color .2s ease-in-out, background .2s ease-in-out

    &.cart
        color: $text-primary
        background: $accent-green

        &.active
            color: $accent-green-lighten
            background: $accent-green-darken

    &.notify
        color: $text-primary
        background: $accent-blue

        &.active
            color: $accent-blue-lighten
            background: $accent-blue-darken
</style>
