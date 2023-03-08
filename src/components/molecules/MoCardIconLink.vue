<script lang="ts" setup>
import { computed } from 'vue'
import AtomCard from '@/components/atoms/AtCard.vue'
import AtomLink from '@/components/atoms/AtLink.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  card: cardModel;
}

interface Emits {
  (eventName: 'on-click', payload: string): void;
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

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
    <template #footer>
      <AtomLink
        href="javascript:void(0)"
        @click="!card.button?.disabled && emit('on-click', card.title)"
      >
        Click Here
      </AtomLink>
    </template>
  </AtomCard>
</template>
