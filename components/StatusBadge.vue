<script setup lang="ts">
const { status } = defineProps(['status'])
</script>

<template>
  <div>
    <span
      :class="[
        status === 'OPEN'
          ? 'bg-green-50 text-green-700 '
          : status === 'IN_PROGRESS'
          ? 'bg-indigo-100 text-indigo-700'
          : ' bg-red-100 text-red-700',
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-600/20',
      ]"
      >{{ status }}</span
    >
  </div>
</template>
