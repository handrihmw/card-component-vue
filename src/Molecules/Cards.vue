<script setup lang="ts">
import AsCard from '@/Molecules/Card.vue'
import { AsCardType } from '@/models/cardModels'

interface Props {
  cards: AsCardType[];
}

const card = defineProps<Props>()
</script>

<template v-for="card in cards">
  <AsCard
    v-if="card"
    :key="JSON.stringify(card)"
    card="card"
  />
</template>