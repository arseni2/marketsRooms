<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import Input from '@/shared/Input/ui/Input.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import Button from '@/shared/Button/ui/Button.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto m-section">
    <div class="w-full bg-white rounded-lg border border-gray-200 md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <Heading tag="h1">Войдите в свой аккаунт</Heading>

        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <Input placeholder="Почта" label="Почта" class="!font-normal" />
          </div>
          <div>
            <Input placeholder="Пароль" label="Пароль" class="!font-normal" />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center">
                <Input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 bg-gray-50"
                />
              </div>
              <div class="ml-3 text-sm">
                <Typography :variant="VariantEnum.secondary" size="12">Запомнить меня</Typography>
              </div>
            </div>
            <Typography :variant="VariantEnum.primary" size="12"> Забыли пароль? </Typography>
          </div>
          <Button variant="primary" type="submit" class="w-full font-medium tracking-wide">
            Войти
          </Button>
          <Typography class="flex gap-2" size="12">
            Ещё нет аккаунта?
            <Typography :variant="VariantEnum.primary">Зарегистрироваться</Typography>
          </Typography>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
