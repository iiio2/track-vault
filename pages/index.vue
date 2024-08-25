<script setup lang="ts">
const { data: issues } = await useFetch('/api/issues/latest-issues')

const count = issues.value?.count.map((item) => item._count)
const total = count?.reduce((a, c) => a + c)
const result = count?.map((item) => ((item / total!) * 100).toFixed(2))
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="col-span-2" id="chart">
      <Chart :result="result" />
    </div>
    <div class="mt-2 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <tbody class="divide-y divide-gray-200">
              <tr v-for="issue in issues?.issues">
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  <NuxtLink :to="'/issues/' + issue.id">
                    {{ issue.title }}
                  </NuxtLink>
                  <div class="mt-3">
                    <StatusBadge :status="issue.status" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
