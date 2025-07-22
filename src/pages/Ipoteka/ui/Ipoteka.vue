<script setup lang="ts">
import CalculatorIpoteka from '@/widgets/CalculatorIpoteka/ui/CalculatorIpoteka.vue'
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import Button from '@/shared/Button/ui/Button.vue'
</script>

<template>
  <div class="flex items-center justify-around">
    <div class="flex flex-col gap-6 max-w-[500px]">
      <Heading tag="h1" class="text-left">
        Удобная ипотека одна заявка несколько банков
      </Heading>
      <Typography>Бесплатный сервис для риелторов и брокеров: подбор ипотечных программ и сравнение подходящих предложений в одном месте</Typography>
      <Button variant="primary">Рассчитать ипотеку</Button>
    </div>
    <img class="max-w-[500px] h-auto" src="../../../assets/House3d.png" alt="">
  </div>

  <div class="m-section flex flex-col gap-4">
    <Heading tag="h1"> Калькулятор ипотеки</Heading>
    <CalculatorIpoteka />
  </div>
</template>

<style scoped></style>
