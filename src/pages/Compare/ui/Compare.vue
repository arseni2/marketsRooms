<script setup lang="ts">
import { ref } from 'vue'
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import Button from '@/shared/Button/ui/Button.vue'

interface Product {
  id: number
  name: string
  price: string
  image: string
  detailLink: string
  reviews: number
  inStock: boolean
  stockStatus: string
  sizes: {
    eu: number[]
  }
  targetGroup: string
  sportswear: boolean
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Slim Lyocell Trousers',
    price: '3 539 793 ₽',
    image: 'https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg ',
    detailLink: '../../pro/shop/product-detail.html',
    reviews: 234,
    inStock: false,
    stockStatus: 'Low in stock',
    sizes: {
      eu: [44, 34, 36, 38, 40, 42],
    },
    targetGroup: 'Men',
    sportswear: false,
  },
  {
    id: 2,
    name: 'Micro Houndstooth Suit Trousers',
    price: '3 539 793 ₽',
    image: 'https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg ',
    detailLink: '../../pro/shop/product-detail.html',
    reviews: 675,
    inStock: true,
    stockStatus: 'In stock',
    sizes: {
      eu: [44, 34, 36, 38, 40, 42],
    },
    targetGroup: 'Men',
    sportswear: true,
  },
])

const removeProduct = (index: number): void => {
  products.value.splice(index, 1)
}
</script>

<template>
  <div class="bg-white m-section p-4">
    <Heading tag="h1">Сравнение</Heading>

    <!-- Flex Container -->
    <div class="flex flex-wrap mt-4 overflow-x-auto">
      <!-- Left Column - Property Names -->
      <div class="flex-none w-48 mt-auto">
        <div class="px-4 py-2 h-16 flex items-center">
          <Typography :variant="VariantEnum.secondary" size="14"> Комнатность </Typography>
        </div>
        <div class="px-4 py-2 h-16 flex items-center">
          <Typography :variant="VariantEnum.secondary" size="14"> Площадь </Typography>
        </div>
        <div class="px-4 py-2 h-16 flex items-center">
          <Typography :variant="VariantEnum.secondary" size="14"> Этаж </Typography>
        </div>
        <div class="px-4 py-2 h-16 flex items-center">
          <Typography :variant="VariantEnum.secondary" size="14"> Дом </Typography>
        </div>
      </div>

      <!-- Product Columns -->
      <div class="flex gap-4">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="flex-none w-72"
        >
          <!-- Product Card Header -->
          <div class="relative p-4 bg-gray-50">
            <a :href="product.detailLink" class="block">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-auto object-cover mb-2 rounded"
              />

              <Heading tag="h5"> {{ product.price }}</Heading>
            </a>

            <!-- Remove Button -->
            <button
              @click="removeProduct(index)"
              class="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Properties -->
          <div class="px-4 py-2 h-16 flex items-center">
            <Typography class="font-medium" :variant="VariantEnum.normal">123</Typography>
          </div>
          <div class="px-4 py-2 h-16 flex items-center">
            <Typography class="font-medium" :variant="VariantEnum.normal">123</Typography>
          </div>
          <div class="px-4 py-2 h-16 flex items-center">
            <Typography class="font-medium" :variant="VariantEnum.normal">123</Typography>
          </div>
          <div class="px-4 py-2 h-16 flex items-center">
            <Typography class="font-medium" :variant="VariantEnum.normal">123</Typography>
          </div>
          <div class="px-4 py-2 h-16 flex items-center">
            <Button class="w-full" variant="primary">Забронировать</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
