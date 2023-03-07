<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(item, index) in data"
        :key="index"
      >
        <Card v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import Card from '@/Molecules/Card.vue'
import { asCardTypes } from '@/datas/asCardData'

const data = computed(() => {
  return asCardTypes
})
</script>
