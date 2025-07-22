<script setup lang="ts">
import Slider from 'primevue/slider';
import { ref, watch } from 'vue';
import Input from '@/shared/Input/ui/Input.vue'

const range = ref<[number, number]>([20, 80]);

// Валидация ручного ввода
function validateMin(val: string) {
  const num = parseInt(val.replace(/\D/g, ''), 10);
  if (!isNaN(num)) {
    range.value[0] = Math.min(num, range.value[1]);
  }
}

function validateMax(val: string) {
  const num = parseInt(val.replace(/\D/g, ''), 10);
  if (!isNaN(num)) {
    range.value[1] = Math.max(num, range.value[0]);
  }
}
</script>

<template>
  <div class="range-slider">
    <!-- Инпуты -->
    <div class="range-input">
      <Input
        type="text"
        :value="range[0]"
        @input="validateMin($event.target.value)"
      />
      <span class="separator">–</span>
      <Input
        type="text"
        class="text-right"
        :value="range[1]"
        @input="validateMax($event.target.value)"
      />
    </div>

    <!-- Ползунок -->
    <Slider v-model="range" range class="custom-slider"
            pt:startHandler:style="width: 0.75rem; height: 0.75rem; background: #007bfb; border-radius: 100%; margin-top: -4.5px; outline: none"
            pt:endHandler:style="width: 0.75rem; height: 0.75rem; background: #007bfb; border-radius: 100%; margin-top: -4.5px; outline: none" />
  </div>
</template>

<style scoped>
.range-slider {
  width: 100%;
  max-width: 280px;
  background: #f7f9fc;
  border-radius: 12px;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* Общий блок инпутов */
.range-input {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
}

.range-input input {
  border: none;
  width: 100%;
  outline: none;
  appearance: none;
  background: transparent;
}

.range-input input:first-child {
  border-right: 1px solid #e4e4e7;
}

.separator {
  display: none;
}

.custom-slider {
  position: relative;
  height: 2px;
  background-color: #e4eaf1;
  border-radius: 3px;
}

/* Активная линия */
.custom-slider > .p-slider-range {
  background-color: #007bff;
  height: 100%;
}

/* Ползунки */
.custom-slider > .p-slider-handle {
  width: 16px;
  height: 16px;
  background: #007bff;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #007bff;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.custom-slider > .p-slider-handle:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>
