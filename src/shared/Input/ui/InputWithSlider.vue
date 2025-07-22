<script setup lang="ts">
import { computed, ref } from 'vue'
import Input from '@/shared/Input/ui/Input.vue'
import type { PropsInputType } from '@/shared/Input/types/types'

const { label } = defineProps<PropsInputType>()

const minValue = 0
const maxValue = 100000000
const value = ref(21097156)

// Форматированное значение
// const formattedValue = computed(() =>
//   value.value.toLocaleString('ru-RU', {
//     // style: 'currency',
//     // currency: 'RUB',
//     minimumFractionDigits: 0,
//   })
// );

// Обработка ввода вручную
function handleInput(event) {
  const input = event.target.value
  const numeric = parseInt(input.replace(/\D/g, ''), 10) || 0
  value.value = Math.min(maxValue, Math.max(minValue, numeric))
}

// Получаем процент для позиционирования синей точки
const percentage = computed(() => ((value.value - minValue) / (maxValue - minValue)) * 100)
</script>

<template>
  <div class="relative w-full rounded-xl ">
    <!-- Поле ввода -->
    <label v-if="label" for="" class="flex flex-col gap-1 text-sm">
      {{ label }}
      <Input  type="numeric" class="w-full font-normal" :value="value" @input="handleInput" />
    </label>

    <Input v-else type="numeric" class="w-full font-normal" :value="value" @input="handleInput" />

    <!-- Линия -->
    <div class="relative w-full h-[1px] bg-blue-100 rounded">
      <!-- Синяя линия от начала до текущего значения -->
      <div class="absolute h-[1px] bg-blue-500 rounded" :style="{ width: percentage + '%' }"></div>

      <!-- Синяя точка -->
      <div
        class="absolute top-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2"
        :style="{ left: `calc(${percentage}% - 6px)` }"
      ></div>
    </div>

    <!-- Невидимый input range для управления значением -->
    <input
      type="range"
      class="w-full absolute opacity-0 cursor-pointer mt-[-10px]"
      :min="minValue"
      :max="maxValue"
      v-model.number="value"
    />
  </div>
</template>
