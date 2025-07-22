<script setup lang="ts">
import Typography from '@/shared/Typography/ui/Typography.vue'
import Button from '@/shared/Button/ui/Button.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import CompareIcons from '@/shared/Icons/ui/CompareIcons.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between border-b border-gray-300 pb-4 pt-4">
      <div class="flex gap-4">
        <Typography
          class="cofo-sans-regular"
          size="12"
          text="О нас"
          :variant="VariantEnum.secondary"
        />
        <Typography
          class="cofo-sans-regular"
          size="12"
          text="Партнерам"
          :variant="VariantEnum.secondary"
        />
        <Typography
          class="cofo-sans-regular"
          size="12"
          text="Риелторам и агентствам"
          :variant="VariantEnum.secondary"
        />
      </div>

      <div class="flex gap-4">
        <Typography
          class="cofo-sans-regular"
          size="12"
          text="Напишите нам"
          :variant="VariantEnum.primary"
        />
        <Typography
          class="cofo-sans-regular"
          size="12"
          text="Москва"
          :variant="VariantEnum.primary"
        />
      </div>
    </div>

    <div class="flex gap-4 justify-between pt-2">
      <RouterLink to="/">
        <h1>LOGO</h1>
      </RouterLink>

      <nav class="flex gap-4 items-center">
        <RouterLink to="/">
          <Typography size="14" class="cofo-sans-medium" text="ЖК" />
        </RouterLink>

        <RouterLink to="/1">
          <Typography size="14" class="cofo-sans-medium" text="Поиск квартир" />
        </RouterLink>

        <RouterLink :to="{ name: 'Commerce' }">
          <Typography size="14" class="cofo-sans-medium" text="Коммерция" />
        </RouterLink>

        <RouterLink :to="{ name: 'Ipoteka' }">
          <Typography size="14" class="cofo-sans-medium" text="Ипотека" />
        </RouterLink>

        <RouterLink :to="{ name: 'RealtorAgency' }">
          <Typography size="14" class="cofo-sans-medium" text="Риелторам и агентствам" />
        </RouterLink>

        <RouterLink :to="{ name: 'Partner' }">
          <Typography size="14" class="cofo-sans-medium" text="Партнеры" />
        </RouterLink>

        <RouterLink :to="{ name: 'Contact' }">
          <Typography size="14" class="cofo-sans-medium" text="Контакты" />
        </RouterLink>
      </nav>

      <div class="flex gap-6 items-center">
        <RouterLink :to="{ name: 'Favorite' }">
          <i class="pi pi-heart text-xl"></i>
        </RouterLink>
        <RouterLink :to="{ name: 'Compare' }">
          <CompareIcons />
        </RouterLink>

        <RouterLink :to="{ name: 'Login' }">
          <Button variant="primary">Войти</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
