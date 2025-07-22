<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import HouseComplexCard from '@/widgets/HouseComplexCard/ui/HouseComplexCard.vue'
import Input from '@/shared/Input/ui/Input.vue'
import FilterButton from '@/shared/Button/ui/FilterButton.vue'
import SelectWithSearch from '@/shared/Input/ui/SelectWithSearch.vue'
import DoubleRangeSlider from '@/shared/Input/ui/DoubleRangeSlider.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import Button from '@/shared/Button/ui/Button.vue'
import ReeltorCard from '@/widgets/ReeltorCard/ui/ReeltorCard.vue'
</script>

<template>
  <div class="m-section">
    <Heading tag="h1">Каталог жилых комплексов</Heading>

    <div class="mt-5">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <SelectWithSearch
            class="!font-normal"
            placeholder="Выберите локацию"
            :options="[{ label: 'Пример локации' }, { label: 'Пример локации 2' }]"
          />

          <Input
            placeholder="стоимость, млн ₽"
            label-class="text-secondary text-xs"
            class="!font-normal"
          />

          <DoubleRangeSlider />

          <SelectWithSearch
            class="!font-normal"
            placeholder="Срок сдачи"
            :options="[{ label: 'Сдан' }, { label: '2025' }, { label: '2026' }]"
          />

          <SelectWithSearch
            class="!font-normal"
            placeholder="Выберите ЖК"
            :options="[{ label: 'Пример жк' }, { label: 'Пример жк 2' }]"
          />
        </div>

        <div class="flex justify-between">
          <div class="flex gap-2 items-center">
            <FilterButton>Загород</FilterButton>
            <FilterButton>Скидка</FilterButton>
            <FilterButton>Бизнес-класс</FilterButton>
          </div>

          <div>
            <FilterButton class="flex items-center gap-2">
              Очистить фильтр
              <li class="pi pi-times text-[11px] text-gray-700 mt-0.5"></li>
            </FilterButton>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-8 mt-4">
        <RouterLink to="1">
          <HouseComplexCard />
        </RouterLink>
        <RouterLink to="1">
          <HouseComplexCard />
        </RouterLink>
        <RouterLink to="1">
          <HouseComplexCard />
        </RouterLink>
        <RouterLink to="1">
          <HouseComplexCard />
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="m-section">
    <Heading tag="h1">Лучшие риэлторы <span class="text-primary">Москвы</span></Heading>
    <div class="mt-4 grid grid-cols-4 gap-4">
      <ReeltorCard />
      <ReeltorCard />
      <ReeltorCard />
      <ReeltorCard />
      <ReeltorCard />
      <ReeltorCard />
    </div>
  </div>
</template>

<style scoped></style>
