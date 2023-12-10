<script setup lang="ts">
import moment from 'moment'
import { type Issue } from '@prisma/client'

const data = ref<Issue[]>([])
const pageSize = ref(6)
const currentPage = ref(1)

const route = useRoute()

watchEffect(async () => {
  const { data: issues } = await useFetch('/api/issues/issues', {
    query: {
      status: route.query.status,
    },
  })
  data.value = issues.value as unknown as Issue[]
})
</script>

<template>
  <FilterIssues />
  <div class="mt-2 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-black text-gray-900 sm:pl-0"
              >
                Issue
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-black text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-black text-gray-900"
              >
                Created
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200" v-for="issue in data">
            <tr>
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
              >
                <NuxtLink :to="'/issues/' + issue.id">
                  {{ issue.title }}
                </NuxtLink>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <StatusBadge :status="issue.status" />
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ moment(issue.createdAt).format('DD MMM, YYYY') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Pagination :pageSize="pageSize" :currentPage="currentPage" />
</template>
