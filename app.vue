<script setup lang="ts">
useSeoMeta({
  title: 'Track Vault',
  ogTitle: 'Track Vault',
  description:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
  ogDescription:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="px-4 sm:px-6 lg:px-8">
        <NuxtLoadingIndicator :height="5" />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.dark body,
.dark body option {
  background-color: #000;
}
.dark body,
.dark body a,
.dark body select,
.dark body,
.dark body th,
.dark body td {
  color: #fff;
}
</style>
