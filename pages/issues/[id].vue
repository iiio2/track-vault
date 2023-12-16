<script setup lang="ts">
const route = useRoute()
interface Issue {
  issue: {
    title: string
    description: string
    status: string
    createdAt: Date
  }
}
const { data } = await useFetch<Issue>(`/api/issues/${route.params.id}`)
</script>

<template>
  <div>
    <h2 class="text-3xl">{{ data?.issue.title }}</h2>
    <StatusBadge :status="data?.issue.status" class="my-2" />
    <p>{{ data?.issue.description }}</p>
    <p>{{ $time(data?.issue.createdAt!) }}</p>
  </div>
</template>
