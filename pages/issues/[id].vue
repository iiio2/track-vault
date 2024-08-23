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

const { status } = useAuth()

const { data } = await useFetch<Issue>(`/api/issues/${route.params.id}`)

const deleteIssue = async () => {
  await useFetch(`/api/issues/${route.params.id}`, {
    method: 'delete',
  })
  toast.success('Issue successfully deleted')
  window.location.href = '/'
}

const assignIssue = async (assignedUserId: string) => {
  const res = await useFetch(`/api/issues/${route.params.id}`, {
    method: 'put',
    body: {
      assignedUserId,
    },
  })
  if (res.status.value === 'success') {
    toast.success('Issue successfully assigned')
  }
}

useSeoMeta({
  title: `Track Vault - ${data.value?.issue.title} `,
  ogTitle: `Track Vault - ${data.value?.issue.title}`,
  description:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
  ogDescription:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
})
</script>

<template>
  <div>
    <Toaster />
    <div class="flex justify-between">
      <div class="flex justify-between gap-5">
        <h2
          :class="[
            'text-3xl',
            $colorMode.preference === 'dark' ? 'text-white' : '',
          ]"
        >
          {{ data?.issue.title }}
        </h2>
        <AssignIssue
          v-if="status === 'authenticated'"
          :data="data"
          :assignIssue="assignIssue"
        />
      </div>
      <div class="flex gap-5">
        <NuxtLink
          v-if="status === 'authenticated'"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          :href="`/issues/edit/${$route.params.id}`"
        >
          {{ $t('edit_issue') }}
        </NuxtLink>
        <button
          v-if="status === 'authenticated'"
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          @click="deleteIssue"
        >
          {{ $t('delete_issue') }}
        </button>
      </div>
    </div>
    <StatusBadge :status="data?.issue.status" class="my-2" />
    <p :class="[$colorMode.preference === 'dark' ? 'text-white' : '']">
      {{ data?.issue.description }}
    </p>
    <p :class="[$colorMode.preference === 'dark' ? 'text-white' : '']">
      {{ $time(data?.issue.createdAt!) }}
    </p>
  </div>
</template>
