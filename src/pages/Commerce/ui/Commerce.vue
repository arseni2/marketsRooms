<script setup lang="ts">

import SelectWithSearch from '@/shared/Input/ui/SelectWithSearch.vue'
import DoubleRangeSlider from '@/shared/Input/ui/DoubleRangeSlider.vue'
import FlatCard from '@/widgets/FlatCard/ui/FlatCard.vue'
import Input from '@/shared/Input/ui/Input.vue'
import Heading from '@/shared/Typography/ui/Heading.vue'
import FilterButton from '@/shared/Button/ui/FilterButton.vue'
</script>

<template>
  <div class="m-section">
    <Heading tag="h1">Каталог <span class="text-primary">коммерчечкой</span> недвижимотси</Heading>

    <div class="flex flex-col gap-4 mt-6">
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


    <div class="grid gap-4.5 grid-cols-4 mt-6">
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>

      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
      <RouterLink to="/1/1">
        <FlatCard />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
