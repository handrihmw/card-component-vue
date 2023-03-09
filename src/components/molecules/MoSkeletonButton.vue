<script setup>
import AsSkeleton from '../atoms/AtSkeleton.vue'
</script>

<template>
  <div class="grid grid-cols-none md:grid-cols-3 gap-4 mb-4">
    <div
      role="status"
      class="max-w-sm p-4 border border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <AsSkeleton class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 my-4" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-5" />
      <AsSkeleton class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
    </div>
    <div
      role="status"
      class="max-w-sm p-4 border border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <AsSkeleton class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 my-4" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-5" />
      <AsSkeleton class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
    </div>
    <div
      role="status"
      class="max-w-sm p-4 border border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <AsSkeleton class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 my-4" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <AsSkeleton class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-5" />
      <AsSkeleton class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
    </div>
  </div>
</template>