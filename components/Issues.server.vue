<script setup lang="ts">
import { type Issue } from '@prisma/client'

const { status } = useAuth()

const data = ref<Issue[]>([])

const route = useRoute()

const tableHeader = [
  { path: 'title', label: 'issue' },
  { path: 'status', label: 'status' },
  { path: 'createdAt', label: 'created' },
]

watchEffect(async () => {
  const { data: issues } = await useFetch('/api/issues/issues', {
    query: {
      status: route.query.orderBy ? undefined : route.query.status,
      page: route.query.page,
      orderBy: route.query.orderBy,
    },
  })
  data.value = issues.value as Issue[]
})

useSeoMeta({
  title: 'Track Vault - Issues',
  ogTitle: 'Track Vault - Issues',
  description:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
  ogDescription:
    'Simplify project oversight and problem resolution using our dedicated online issue tracking system',
})
</script>

<template>
  <div class="flex justify-between">
    <FilterIssues />
    <a
      v-if="status === 'authenticated'"
      href="/issues/new"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {{ $t('add_new_issue') }}
    </a>
  </div>

  <div class="mt-2 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                v-for="header in tableHeader"
                :key="header.path"
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-black text-gray-900 sm:pl-0 cursor-pointer"
                @click="$router.push('/issues?orderBy=' + header.path)"
              >
                {{ $t(header.label) }}
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr v-for="issue in data">
              <td
                :key="issue.id"
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
                {{ $time(issue.createdAt) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Pagination
    v-if="!$route.query.status && !$route.query.orderBy"
    :query="$route.query"
  />
</template>
