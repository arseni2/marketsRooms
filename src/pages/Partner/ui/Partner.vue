<script setup lang="ts">

import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'

const dataBank = [
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/vtb-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/psb-bank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/sovkombank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/sankt-peterburg-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/ak-bars-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/uralsib-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/absolut-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/mts-bank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/tkb-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/mkb-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/investtorgbank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/alfa-bank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/bank-rossia-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/bzhf-bank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/pochta-bank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/zenit-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/gazprombank-324x152.svg " },
  { src: "https://cdn.m2.ru/assets/illustrations/logos/partners/banks/dom-rf-324x152.svg " }
];
const dataDevelopers = [
  { src: "https://cdn.m2.ru/assets/images/partner-pik-3.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-donstroy.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-mr-group.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-ingrad.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-etalon.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-samolet-5.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-a101.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-level.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-krost.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-tekta-group.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-hals.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-zorge9.svg " },
];
const dataInsurance = [
  { src: "https://cdn.m2.ru/assets/images/partner-sogaz.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-alfa-insurance.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-sovkombank-insurance.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-absolut-insurance.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-yugoria.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-reso.svg " },
  { src: "https://cdn.m2.ru/assets/images/partner-skpari.svg " },
  { src: "https://cdn.m2.ru/assets/file-upload-server/281a9e499bfd4e495bff5910d6118525.svg " },
  { src: "https://cdn.m2.ru/assets/file-upload-server/a1c4f34f5b5074a5d2559a8b22493a2c.svg " },
];
</script>

<template>
  <div class="m-section">
    <Heading tag="h1" class="mt-5">
      Банки
    </Heading>

    <Typography class="mt-2 text-center">
      Вместе с крупнейшими банками мы предлагаем для клиентов, риелторов и застройщиков
      <RouterLink to="" class="text-primary">сервис ипотечного кредитования</RouterLink>
      покупки недвижимости.
    </Typography>

    <div class="grid grid-cols-3">
      <article v-for="item of dataBank">
        <picture class="flex justify-center items-center">
          <img :src="item.src" alt="image">
        </picture>
      </article>
    </div>
  </div>
  <div class="m-section">
    <Heading tag="h1" class="mt-5">
      Застройщики
    </Heading>

    <Typography class="mt-2 text-center">
      Ведущим девелоперским компаниям мы помогаем организовывать и оптимизировать процесс продаж недвижимости онлайн, без посещения клиентами офисов.
    </Typography>

    <div class="grid grid-cols-3 gap-4">
      <article v-for="item of dataDevelopers">
        <picture class="flex justify-center items-center">
          <img :src="item.src" alt="image">
        </picture>
      </article>
    </div>
  </div>
  <div class="m-section">
    <Heading tag="h1" class="mt-5">
      Страховые компании
    </Heading>

    <Typography class="mt-2 text-center">
      Защиту интересов наших клиентов, их имущества и гражданской ответственности мы обеспечиваем при участии лидеров рынка страхования.
    </Typography>

    <div class="grid grid-cols-3 gap-4">
      <article v-for="item of dataInsurance">
        <picture class="flex justify-center items-center">
          <img :src="item.src" alt="image">
        </picture>
      </article>
    </div>
  </div>
</template>

<style scoped>

</style>
