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
    <div class="flex justify-between">
      <h2 class="text-3xl">{{ data?.issue.title }}</h2>
      <div class="flex gap-5">
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Edit Issue
        </button>
        <button
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Delete Issue
        </button>
      </div>
    </div>
    <StatusBadge :status="data?.issue.status" class="my-2" />
    <p>{{ data?.issue.description }}</p>
    <p>{{ $time(data?.issue.createdAt!) }}</p>
  </div>
</template>
