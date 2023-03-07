<script lang="ts" setup>
import { defineProps } from 'vue'
import AsCard from '@/Atoms/AsCard.vue'
import AsButton from '@/Atoms/AsButton.vue'

interface Props {
  icon: string;
  title: string;
  content: string;
}

const props = defineProps<Props>()
</script>

<template>
  <AsCard>
    <template #body>
      <img
        class="as-card__icon"
        :src="`${props.icon}`"
        :alt="title"
        width="40"
        height="40"
        loading="lazy"
      >
      <h3 class="as-card__title">
        {{ props.title }}
      </h3>
      <p class="as-card__content">
        {{ props.content }}
      </p>
    </template>
    <template #footer>
      <AsButton
        anchor
        primary
        lg
      >
        Click Here
      </AsButton>
    </template>
  </AsCard>
</template>
