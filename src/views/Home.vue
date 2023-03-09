<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center mb-3">
      <div>
        <h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Card Components
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400">
          Here is an example of using a card component using the Vue js 3 Composition API, Typescript, and Tailwind CSS
        </p>
      </div>
      <TemplateDark />
    </div>
    
    <hr class="h-px mt-5 mb-8 bg-gray-200 border-0 dark:bg-gray-700">
    <div>
      <TemplateCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import TemplateDark from '@/components/templates/TemDark.vue'
import TemplateCard from '@/components/templates/TemCard.vue'
</script>
