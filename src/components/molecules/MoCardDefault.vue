<script lang="ts" setup>
import AtomCard from '@/components/atoms/AtCard.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  card: cardModel;
}

const props = defineProps<Props>()
</script>

<template>
  <AtomCard>
    <template #body>
      <h3 class="as-card__title">
        {{ card.title }}
      </h3>
      <p class="as-card__content">
        {{ props.card.content }}
      </p>
    </template>
  </AtomCard>
</template>
