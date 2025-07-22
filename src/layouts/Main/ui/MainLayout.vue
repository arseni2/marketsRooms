<script setup lang="ts">

import Header from '@/widgets/Header/ui/Header.vue'
import Footer from '@/widgets/Footer/ui/Footer.vue'
</script>

<template>
  <div class="max-w-[1320px] mx-auto">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
