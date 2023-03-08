<template>
  <a
    :class="className"
    role="button"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  blue: Boolean,
})

const className = computed(() => {
  let baseName = 'as-link'

  return {
    [baseName]: true,
    [`${baseName}--blue`]: props.blue,
  }
})
</script>

<style>
.as-link {
    @apply inline-flex items-center text-gray-900 dark:text-white underline hover:underline mt-4;
  }
  .as-link--blue {
    @apply inline-flex no-underline items-center text-blue-600 hover:underline;
  }
</style>