<script setup lang="ts">
const { status } = defineProps(['status'])
</script>

<template>
  <div>
    <span
      :class="[
        status === 'OPEN'
          ? 'inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
          : status === 'IN_PROGRESS'
          ? 'inline-flex items-center rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700'
          : 'inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700',
      ]"
      >{{ status }}</span
    >
  </div>
</template>
