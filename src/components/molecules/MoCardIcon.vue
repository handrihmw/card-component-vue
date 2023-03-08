<script lang="ts" setup>
import { computed } from 'vue'
import AtomCard from '@/components/atoms/AtCard.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  card: cardModel;
}

const props = defineProps<Props>()

const altTitle = computed(() => `image ${props.card.title}`)
</script>

<template>
  <AtomCard>
    <template #body>
      <img
        class="as-card__icon"
        :src="`${card.icon}`"
        :alt="`${altTitle}`"
        width="40"
        height="40"
        loading="lazy"
      >
      <h3 class="as-card__title">
        {{ card.title }}
      </h3>
      <p class="as-card__content">
        {{ props.card.content }}
      </p>
    </template>
  </AtomCard>
</template>
