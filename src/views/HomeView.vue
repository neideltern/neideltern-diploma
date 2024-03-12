<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

const cards = ref([
    {
        thumbnail:
            'https://my-apple.com.ua/image/catalog/products/iphone/iphone-15-pro-15-pro-max/natural-titanium-1.png',
        title: 'apple iphone 15 pro max natural titanium 256 GB eSIM (MU683)',
        badges: {
            discount: 15,
            promocode: 'TMC755OFF'
        },
        colors: ['white', 'AntiqueWhite', 'CornflowerBlue', 'black'],
        variants: ['256 GB', '512 GB', '1 TB'],
        pricePrimary: '$1,199',
        priceSecondary: '$1,399'
    },
    {
        thumbnail:
            'https://img.telemart.ua/304983-468942/cooler-master-masterbox-nr200p-tempered-glass-bez-bp-mcb-nr200p-wgnn-s00-white.png',
        title: 'Cooler Master MasterBox NR200P',
        colors: ['white', 'black', 'DarkOrange', 'HotPink', 'DarkCyan'],
        pricePrimary: '$99'
    },
    {
        thumbnail:
            'https://cdn.itgadgetsonline.com/wp-content/uploads/2022/07/MSI-MPG-B550-GAMING-PLUS-2.webp',
        title: 'MSI MPG B550 Gaming Plus WIFI AM4 Motherboard',
        badges: {
            discount: 12
        },
        variants: ['WIFI', 'No WIFI'],
        pricePrimary: '$120',
        priceSecondary: '$179'
    },
    {
        thumbnail:
            'https://img.telemart.ua/441955-584672-product_popup/asus-rog-loki-sfx-l-750w-platinum-rog-loki-750p-sfx-l-gaming.png',
        title: 'Asus ROG Loki Platinum 750W black SFX ATX 3.0 PCIe 5.0',
        badges: {
            new: true
        },
        colors: ['white', 'black'],
        variants: ['750W', '850W', '1000W'],
        pricePrimary: '229'
    }
])
</script>

<template>
    <main>
        <section class="section">
            <ProductCard
                v-for="(card, index) in cards"
                :key="index"
                :thumbnail="card.thumbnail"
                :title="card.title"
                :badges="card.badges"
                :colors="card.colors"
                :variants="card.variants"
                :price-primary="card.pricePrimary"
                :price-secondary="card.priceSecondary"
            />
        </section>
    </main>
</template>

<style lang="stylus" scoped>
.section
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-auto-rows: max-content
    gap: $gap-sm
    // temp
    margin-top: 120px
    padding: 0 60px
</style>
