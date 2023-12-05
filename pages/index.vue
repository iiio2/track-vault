<script setup lang="ts">
const { data: issues } = await useFetch('/api/issues/latest-issues')
</script>

<template>
  <div>
    <div class="mt-2 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <tbody class="divide-y divide-gray-200">
              <tr v-for="issue in issues">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
