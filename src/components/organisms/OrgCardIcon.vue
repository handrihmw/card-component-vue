<script setup lang="ts">
import { ref } from 'vue'
import AsCard from '@/components/molecules/MoCardIcon.vue'
import AsSkeletons from '@/components/molecules/MoSkeletonIcon.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  cards: cardModel[];
}

interface Emits {
  (eventName: 'on-click', payload: string): void;
}

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 5000)


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <AsSkeletons v-if="isLoading" />
  <div
    v-else
    class="grid grid-cols-none md:grid-cols-3 gap-4 mb-4"
  >
    <template
      v-for="card in cards"
    >
      <AsCard
        v-if="card"
        :key="JSON.stringify(card)"
        :card="card"
        @on-click="emit('on-click', card.title)"
      />
    </template>
  </div>
</template>