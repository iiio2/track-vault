<script setup lang="ts">
import { Toaster, toast } from '@steveyuowo/vue-hot-toast'
import '@steveyuowo/vue-hot-toast/vue-hot-toast.css'

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

const deleteIssue = async () => {
  await useFetch(`/api/issues/${route.params.id}`, {
    method: 'delete',
  })
  toast.success('Issue successfully deleted')
  window.location.href = '/'
}
</script>

<template>
  <div>
    <Toaster />
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
          @click="deleteIssue"
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
