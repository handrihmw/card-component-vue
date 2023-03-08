<script setup lang="ts">
import AsCard from '@/components/molecules/MoCardIcon.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  cards: cardModel[];
}

interface Emits {
  (eventName: 'on-click', payload: string): void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="grid grid-cols-none md:grid-cols-3 gap-4 mb-4">
    <template v-for="card in cards">
      <AsCard
        v-if="card"
        :key="JSON.stringify(card)"
        :card="card"
        @on-click="emit('on-click', card.title)"
      />
    </template>
  </div>
</template>