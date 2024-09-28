<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

import { z } from 'zod'
import { type Issue } from '@prisma/client'
import { Toaster, toast } from '@steveyuowo/vue-hot-toast'
import type { FormSubmitEvent } from '#ui/types'
import { issueFormSchema } from '~/prisma/IssueFormSchema'
import '@steveyuowo/vue-hot-toast/vue-hot-toast.css'

type schema = z.output<typeof issueFormSchema>

const route = useRoute()

const { data } = await useFetch<{
  issue: Issue
}>(`/api/issues/${route.params.id}`)

const fetchedIssue = data.value as any

const issue = ref({
  title: fetchedIssue.issue.title || '',
  description: fetchedIssue.issue.description || '',
})

const editIssue = async ({ data }: FormSubmitEvent<schema>) => {
  try {
    const { data: newIssue } = await useFetch(
      `/api/issues/${route.params.id}`,
      {
        method: 'put',
        body: {
          title: data.title,
          description: data.description,
        },
      }
    )
    if (newIssue.value) {
      toast.success('Issue edited')
      window.location.href = '/'
    }
  } catch (ex) {
    toast.error('Something error occured')
  }
}

useSeoMeta({
  title: `Track Vault - ${data.value?.issue.title} - Edit `,
  ogTitle: `Track Vault - ${data.value?.issue.title} - Edit`,
  description:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
  ogDescription:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
})
</script>

<template>
  <div class="w-full">
    <Toaster />
    <UForm
      class="px-8 pt-6 pb-8 mb-4"
      :schema="issueFormSchema"
      :state="issue"
      @submit="editIssue"
    >
      <UFormGroup label="Title" name="title" class="mb-2">
        <UInput
          v-model="issue.title"
          placeholder="Title..."
          input-class="py-3"
        />
      </UFormGroup>
      <UFormGroup label="Description" name="description">
        <UInput
          v-model="issue.description"
          placeholder="Description..."
          input-class="py-3"
        />
      </UFormGroup>
      <UButton
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 mt-5"
      >
        {{ $t('edit_issue') }}
      </UButton>
    </UForm>
  </div>
</template>
