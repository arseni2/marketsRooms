<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Input from '@/shared/Input/ui/Input.vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['update:selected'])

const isOpen = ref(false)
const searchQuery = ref('')
const selectedOption = ref(null)
const selectContainer = ref(null)

// Фильтрация опций по поисковому запросу
const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options

  const query = searchQuery.value.toLowerCase()
  return props.options.filter((option) => option.label.toLowerCase().includes(query))
})

// Переключение выпадающего списка
function toggleDropdown() {
  isOpen.value = !isOpen.value
}

// Выбор опции
function selectOption(option) {
  selectedOption.value = option
  searchQuery.value = option.label
  emit('update:selected', option.value)
  isOpen.value = false
}

// Очистка значения
function clearSelection() {
  searchQuery.value = ''
  selectedOption.value = null
  emit('update:selected', null)
}

// Закрытие по клику вне компонента
function handleClickOutside(event) {
  if (selectContainer.value && !selectContainer.value.contains(event.target)) {
    isOpen.value = false
  }
}

// Подписываемся на событие при монтировании
onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

// Отписываемся от события при разрушении
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="selectContainer">
    <!-- Input для поиска -->
    <label v-if="label" for="" class="flex flex-col gap-1 text-sm">
      {{ label }}
      <input
        v-model="searchQuery"
        @click="toggleDropdown"
        :placeholder="props.placeholder"
        class="border-1 border-gray-300 p-2 pr-8 rounded-lg text-sm font-normal text-gray-900 outline-none focus:border-primary transition-all w-full"
      />
    </label>
    <input
      v-else
      v-model="searchQuery"
      @click="toggleDropdown"
      :placeholder="props.placeholder"
      class="h-full border-1 border-gray-300 p-2 pr-8 rounded-lg text-sm font-normal text-gray-900 outline-none focus:border-primary transition-all w-full"
    />

    <!-- Иконка крестика -->
    <div
      v-if="searchQuery"
      @click.stop="clearSelection"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
    >
      <i class="pi pi-times"></i>
    </div>

    <!-- Список опций -->
    <div
      v-if="isOpen"
      class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
    >
      <div
        v-for="option in filteredOptions"
        :key="option.value"
        @click="selectOption(option)"
        class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
      >
        {{ option.label }}
      </div>

      <!-- Если нет совпадений -->
      <div v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-500">
        Ничего не найдено
      </div>
    </div>
  </div>
</template>
