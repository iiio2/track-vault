<script setup lang="ts">
import { z } from 'zod'
import { Toaster, toast } from '@steveyuowo/vue-hot-toast'
import type { FormSubmitEvent } from '#ui/types'
import { issueFormSchema } from '~/prisma/IssueFormSchema'
import '@steveyuowo/vue-hot-toast/vue-hot-toast.css'

type schema = z.output<typeof issueFormSchema>

const issue = ref({
  title: '',
  description: '',
})

const addIssue = async ({ data }: FormSubmitEvent<schema>) => {
  try {
    const { data: newIssue } = await useFetch('/api/issues/issues', {
      method: 'post',
      body: {
        title: data.title,
        description: data.description,
      },
    })
    if (newIssue.value) {
      toast.success('Issue added')
    }
  } catch (ex) {
    toast.error('Something error occured')
  }
}
</script>

<template>
  <div class="w-full">
    <Toaster />
    <UForm
      class="px-8 pt-6 pb-8 mb-4"
      :schema="issueFormSchema"
      :state="issue"
      @submit="addIssue"
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
        Add New Issue
      </UButton>
    </UForm>
  </div>
</template>
