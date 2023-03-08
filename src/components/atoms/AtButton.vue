<template>
  <a
    v-if="anchor"
    :class="className"
    role="button"
  >
    <slot />
  </a>
  <button
    v-else
    :class="className"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  anchor: Boolean,
  fluid: Boolean,
  primary: Boolean,
  secondary: Boolean,
  disabled: Boolean,
  sm: Boolean,
  md: Boolean,
  lg: Boolean,
})

const className = computed(() => {
  let baseName = 'as-button'

  return {
    [baseName]: true,
    [`${baseName}--fluid`]: props.fluid,
    [`${baseName}--primary`]: props.primary && !props.disabled,
    [`${baseName}--secondary`]: props.secondary && !props.disabled,
    [`${baseName}--disabled`]: props.disabled,
    [`${baseName}--xs`]: props.sm,
    [`${baseName}--sm`]: props.md,
    [`${baseName}--lg`]: props.lg,
  }
})
</script>

<style>
.as-button {
    @apply inline-flex items-center mt-5 px-3 py-2.5 text-sm font-medium text-center rounded-full focus:ring-4 focus:outline-none;
  }
  
  .as-button--primary {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
  }
  
  .as-button--secondary {
    @apply text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700;
  }
  
  .as-button--fluid {
    @apply flex text-center justify-center w-full;
  }
  
  .as-button--disabled {
    @apply py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 disabled:opacity-75 cursor-not-allowed;
  }
  
  .as-button--xs {
    @apply px-3 py-2 text-xs;
  }
  
  .as-button--sm {
    @apply px-3 py-2 text-sm;
  }
  
  .as-button--lg {
    @apply px-5 py-3 text-base;
  }
</style>