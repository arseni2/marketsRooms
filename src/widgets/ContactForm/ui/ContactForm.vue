<script setup lang="ts">
import Input from '@/shared/Input/ui/Input.vue'
import Textarea from '@/shared/Input/ui/Textarea.vue'
import Button from '@/shared/Button/ui/Button.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
</script>

<template>
  <Input placeholder="E-mail" label="E-mail" type="email" />
  <Input placeholder="Телефон" label="Телефон" type="telephone" />
  <Textarea placeholder="Сообщение" label="Сообщение" />
  <Button variant="primary">Отправить</Button>
  <Typography size="12" :variant="VariantEnum.secondary">
    Нажимая "Отправить" вы даете согласие на обработку ваших персональных данных в соответствии с
    <Typography size="12" :variant="VariantEnum.primary">
      Политикой конфиденциальности.
    </Typography>
  </Typography>
</template>

<style scoped></style>
