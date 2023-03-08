<script lang="ts" setup>
import AtomCard from '@/components/atoms/AtCard.vue'
import AtomButton from '@/components/atoms/AtButton.vue'
import { cardModel } from '@/types/cardModel'

interface Props {
  card: cardModel;
}

interface Emits {
  (eventName: 'on-click', payload: string): void;
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

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
    <template #footer>
      <AtomButton
        primary
        lg
        @click="!card.button?.disabled && emit('on-click', card.title)"
      >
        Click Here
      </AtomButton>
    </template>
  </AtomCard>
</template>
