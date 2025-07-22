<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import Button from '@/shared/Button/ui/Button.vue'
import CompareIcons from '@/shared/Icons/ui/CompareIcons.vue'
import Input from '@/shared/Input/ui/Input.vue'
import FlatCard from '@/widgets/FlatCard/ui/FlatCard.vue'
import CalculatorIpoteka from '@/widgets/CalculatorIpoteka/ui/CalculatorIpoteka.vue'
</script>

<template>
  <div class="m-section grid grid-cols-[1fr_640px] gap-4">
    <div class="grid grid-cols-2 gap-4">
      <div
        class="flex items-center aspect-[3/4] rounded-lg border border-gray-200 bg-white duration-200 w-full h-fit relative overflow-hidden"
      >
        <img
          src="https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg"
          alt="img"
        />
      </div>
      <div
        class="flex items-center aspect-[3/4] rounded-lg border border-gray-200 bg-white duration-200 w-full h-fit relative overflow-hidden"
      >
        <img
          src="https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg"
          alt="img"
        />
      </div>
      <div
        class="flex items-center aspect-[3/4] rounded-lg border border-gray-200 bg-white duration-200 w-full h-fit relative overflow-hidden"
      >
        <img
          src="https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg"
          alt="img"
        />
      </div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-4">
        <div
          class="flex flex-col gap-2 rounded-md border border-gray-200 bg-white/70 p-4 backdrop-blur-md backdrop-brightness-[1] backdrop-contrast-[1] backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-100 backdrop-saturate-100 backdrop-sepia-0"
        >
          <div class="flex flex-col">
            <Typography :variant="VariantEnum.secondary" size="12"
              >Пригород Лесное, м. Домодедовская
            </Typography>
            <Heading tag="h5"> Студия 22,8 м²</Heading>
          </div>
          <div class="rounded-full text-xs font-medium text-white bg-gray-800 w-fit py-1 px-2.5">
            Без отделки
          </div>
        </div>

        <div
          class="min-w-[300px] flex flex-col gap-2 rounded-md border border-gray-200 bg-white/70 p-4 backdrop-blur-md backdrop-brightness-[1] backdrop-contrast-[1] backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-100 backdrop-saturate-100 backdrop-sepia-0"
        >
          <div class="flex gap-4 items-center">
            <li class="pi pi-sliders-h bg-gray-100 rounded-md p-2 text-sm"></li>
            <Heading tag="h6" class="text-sm">Характеристики</Heading>
          </div>

          <div class="flex justify-between">
            <div class="text-xs text-gray-500">Тип недвижимости</div>
            <div class="text-xs">Квартира</div>
          </div>

          <div class="flex justify-between">
            <div class="text-xs text-gray-500">Корпус</div>
            <div class="text-xs">21</div>
          </div>

          <div class="flex justify-between">
            <div class="text-xs text-gray-500">Секция</div>
            <div class="text-xs">6</div>
          </div>

          <div class="flex justify-between">
            <div class="text-xs text-gray-500">Этаж</div>
            <div class="text-xs">8 из 17</div>
          </div>

          <div class="flex justify-between">
            <div class="text-xs text-gray-500">Тип планировки</div>
            <div class="text-xs">Линейная</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div
          class="flex items-center gap-2 rounded-md border border-gray-200 bg-white/70 p-4 backdrop-blur-md backdrop-brightness-[1] backdrop-contrast-[1] backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-100 backdrop-saturate-100 backdrop-sepia-0"
        >
          <li class="pi pi-building text-4xl text-primary"></li>
          <div class="flex flex-col">
            <Heading tag="h6">ЖК Пригород Лесное</Heading>
            <Typography size="12" :variant="VariantEnum.secondary"
              >@prigorod_lesnoe_news
            </Typography>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 rounded-md border border-gray-200 bg-white/70 p-4 backdrop-blur-md backdrop-brightness-[1] backdrop-contrast-[1] backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-100 backdrop-saturate-100 backdrop-sepia-0"
        >
          <Typography class="font-medium" size="18" :variant="VariantEnum.primary">
            3 681 607 ₽
          </Typography>

          <div class="flex gap-2 w-full mt-2">
            <Button class="w-full font-medium tracking-wide" variant="primary"
              >Забронировать
            </Button>
            <Button variant="secondary">
              <li class="pi pi-heart"></li>
            </Button>
          </div>
          <Typography size="12" :variant="VariantEnum.secondary" class="flex gap-2"
            >В ипотеку —
            <Typography :variant="VariantEnum.primary">от 11 469 ₽/мес.</Typography>
          </Typography>
          <Button variant="secondary" class="flex items-center justify-center gap-2 mt-1">
            <CompareIcons class="!h-6 !w-6" />
            <Typography size="13">В список сравнения</Typography>
          </Button>
        </div>
      </div>
    </div>

    <div>
      <div class="flex border-b-1 w-full border-b-gray-200 mt-8">
        <button
          class="pb-2 px-5 border-b-1 border-b-primary flex gap-2 items-center transparent-black hover:transparent-primary-500 hover:border-primary-500"
          type="button"
          title="Описание"
          aria-label="Описание"
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
            class="text-primary h-5"
          >
            <path d="M15 12H3"></path>
            <path d="M17 18H3"></path>
            <path d="M21 6H3"></path>
          </svg>
          <Typography size="12" :variant="VariantEnum.primary">Описание</Typography>
        </button>

        <button
          class="pb-2 px-5 flex gap-2 items-center transparent-black hover:transparent-primary-500 hover:border-primary-500"
          type="button"
          title="Описание"
          aria-label="Описание"
        >
          <li class="pi pi-sliders-h text-sm text-gray-500"></li>
          <Typography size="12">Характеристики</Typography>
        </button>
      </div>
      <div class="py-2">Тестовое описание</div>
    </div>
  </div>

  <div class="m-section flex flex-col gap-4">
    <Heading tag="h1"> Калькулятор ипотеки</Heading>
    <CalculatorIpoteka />
  </div>
  <div class="m-section flex flex-col items-center gap-4">
    <Heading tag="h4">Подпишитесь на новости проекта</Heading>
    <div class="flex gap-2 items-center w-full mt-2 justify-center">
      <Input placeholder="email" class="w-full max-w-[350px]" />
      <Button variant="primary">Отправить</Button>
    </div>
  </div>
  <div class="m-section flex flex-col gap-4">
    <Heading tag="h4">Квартиры, которые вам понравятся</Heading>
    <div class="grid gap-4.5 grid-cols-4">
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
    </div>
  </div>
</template>

<style scoped></style>
