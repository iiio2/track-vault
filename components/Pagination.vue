<script setup lang="ts">
const { pageSize, currentPage } = defineProps([
  'itemCount',
  'pageSize',
  'currentPage',
])

const { data } = await useFetch('/api/issues/issues-count')

const pages = computed(() => {
  const pageCount = Math.ceil(data.value! / pageSize)
  if (pageCount <= 1) return null
  const totalPages = Array.from({ length: pageCount + 1 }, (v, i) => i).filter(
    Boolean
  )
  return totalPages
})
</script>

<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">1</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">10</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">97</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
          v-for="page in pages"
        >
          <NuxtLink
            @click="$router.push('/issues?page=4')"
            href="#"
            aria-current="page"
            :class="[
              page === currentPage
                ? 'bg-indigo-600 text-white'
                : 'text-indigo-600',
              'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            ]"
            >{{ page }}</NuxtLink
          >
        </nav>
      </div>
    </div>
  </div>
</template>
