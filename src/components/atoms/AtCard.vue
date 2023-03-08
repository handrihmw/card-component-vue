<template>
  <div class="as-card">
    <div
      v-if="$slots.header"
      class="as-card__header"
      :class="className"
    >
      <slot name="header" />
    </div>
    <div
      v-if="$slots.body"
      class="as-card__body"
    >
      <slot name="body" />
    </div>
    <div
      v-if="$slots.footer"
      class="as-card__footer"
      :class="className"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  fullHeader: Boolean,
  fluidFooter: Boolean,
  centerFooter: Boolean,
})

const className = computed(() => ({
  'as-card__header--full': props.fullHeader,
  'as-card__footer--fluid': props.fluidFooter,
  'as-card__footer--center': props.centerFooter,
}))
</script>

<style>
.as-card {
    @apply max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700;
  }
  
  .as-card__header--full {
    @apply p-0;
  }
  
  .as-card__icon {
    @apply w-10 h-10 mb-3 text-gray-500 dark:text-gray-400 rounded-full;
  }
  
  .as-card__title {
    @apply mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white;
  }
  
  .as-card__content {
    @apply font-normal text-sm text-gray-500 dark:text-gray-400;
  }
  
  .as-card__footer--fluid {
    @apply w-full text-center;
  }
  
  .as-card__footer--center {
    @apply flex justify-center align-middle;
  }
</style>