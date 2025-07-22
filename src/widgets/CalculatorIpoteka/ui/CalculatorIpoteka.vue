<script setup lang="ts">

import Heading from '@/shared/Typography/ui/Heading.vue'
import Select from '@/shared/Input/ui/Select.vue'
import SelectWithSearch from '@/shared/Input/ui/SelectWithSearch.vue'
import InputWithSlider from '@/shared/Input/ui/InputWithSlider.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import Button from '@/shared/Button/ui/Button.vue'

const options = [
  {key: 'Стандартная', value: 'Стандартная'},
  {key: 'Семейная', value: 'Семейная'},
  {key: 'IT-ипотека', value: 'IT-ипотека'},
]
const selectWithOptions = [
  { label: 'Опция 1', value: 1 },
  { label: 'Опция 2', value: 2 },
  { label: 'Ещё одна опция', value: 3 },
  { label: 'Тестовая опция', value: 4 }
]

const typeHouse = [
  {key: 'Квартира', value: 'Квартира'},
  {key: 'Таунхаус', value: 'Таунхаус'},
  {key: 'Кладовая', value: 'Кладовая'},
]

function handleSelected(value) {
  console.log('Выбрано значение:', value)
}
</script>

<template>
  <div class=" flex flex-col gap-4 items-center">
    <div class="flex gap-16">
      <div class="flex flex-col gap-4 w-[300px]">
        <Select :options="options" label="Тип ипотеки"/>
        <SelectWithSearch label="Регион покупки недвижимости" :options="selectWithOptions" @update:selected="handleSelected" />
        <Select :options="typeHouse" label="Тип недвижимости"/>
        <InputWithSlider label="Стоимость недвижимости" />
        <InputWithSlider label="Певроначальный взнос" />
        <InputWithSlider label="Срок кредита" />

      </div>

      <div>
        <div class="flex flex-col gap-6  p-6 rounded-2xl">
          <div class="bg-white flex w-[400px] justify-between p-4 rounded-xl gap-6 border-1 border-gray-200">
            <div class="flex gap-4 items-center">
              <img src="https://img.m2.ru/m2-pht/3a71f825/c7813d8f/8215458e-e942-427b-8ce7-353bb754a2e3/origin" alt="logo">
              <Typography>Банк</Typography>
            </div>


            <div class="flex flex-col">
              <Typography size="12">Ставка от</Typography>
              <Heading tag="h6">22%</Heading>
            </div>

            <div class="flex flex-col">
              <Typography size="12">Платёж от</Typography>
              <Heading tag="h6">10 595 ₽</Heading>
            </div>
          </div>
          <div class="bg-white flex w-[400px] justify-between p-4 rounded-xl gap-6 border-1 border-gray-200">
            <div class="flex gap-4 items-center">
              <img src="https://img.m2.ru/m2-pht/3a71f825/c7813d8f/8215458e-e942-427b-8ce7-353bb754a2e3/origin" alt="logo">
              <Typography>Банк</Typography>
            </div>


            <div class="flex flex-col">
              <Typography size="12">Ставка от</Typography>
              <Heading tag="h6">22%</Heading>
            </div>

            <div class="flex flex-col">
              <Typography size="12">Платёж от</Typography>
              <Heading tag="h6">10 595 ₽</Heading>
            </div>
          </div>
          <div class="bg-white flex w-[400px] justify-between p-4 rounded-xl gap-6 border-1 border-gray-200">
            <div class="flex gap-4 items-center">
              <img src="https://img.m2.ru/m2-pht/3a71f825/c7813d8f/8215458e-e942-427b-8ce7-353bb754a2e3/origin" alt="logo">
              <Typography>Банк</Typography>
            </div>


            <div class="flex flex-col">
              <Typography size="12">Ставка от</Typography>
              <Heading tag="h6">22%</Heading>
            </div>

            <div class="flex flex-col">
              <Typography size="12">Платёж от</Typography>
              <Heading tag="h6">10 595 ₽</Heading>
            </div>
          </div>
          <div class="bg-white flex w-[400px] justify-between p-4 rounded-xl gap-6 border-1 border-gray-200">
            <div class="flex gap-4 items-center">
              <img src="https://img.m2.ru/m2-pht/3a71f825/c7813d8f/8215458e-e942-427b-8ce7-353bb754a2e3/origin" alt="logo">
              <Typography>Банк</Typography>
            </div>


            <div class="flex flex-col">
              <Typography size="12">Ставка от</Typography>
              <Heading tag="h6">22%</Heading>
            </div>

            <div class="flex flex-col">
              <Typography size="12">Платёж от</Typography>
              <Heading tag="h6">10 595 ₽</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button class="max-w-[812px] w-full mt-6 font-medium" variant="primary">Подать заявку</Button>
  </div>
</template>

<style scoped>

</style>
