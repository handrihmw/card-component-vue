<template>
  <section>
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card Default
    </h2>
    <OrganismCardDefault :cards="data" />
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card with button
    </h2>
    <OrganismCardButton :cards="data" />
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card with link
    </h2>
    <OrganismCardLink :cards="data" />
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card with icon
    </h2>
    <OrganismCardIcon :cards="data" />
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card with icon button
    </h2>
    <OrganismCardIconButton :cards="data" />
    <h2 class="text-xl font-semibold mb-3 mt-8 text-gray-800 dark:text-white">
      Card with icon link
    </h2>
    <OrganismCardIconLink :cards="data" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import OrganismCardButton from '@/components/organisms/OrgCardButton.vue'
import OrganismCardIcon from '@/components/organisms/OrgCardIcon.vue'
import OrganismCardIconButton from '@/components/organisms/OrgCardIconButton.vue'
import OrganismCardIconLink from '@/components/organisms/OrgCardIconLink.vue'
import OrganismCardLink from '@/components/organisms/OrgCardLink.vue'
import OrganismCardDefault from '@/components/organisms/OrgCardDefault.vue'
import { cardData } from '@/datas/cardData'

const data = computed(() => {
  return cardData
})
</script>
