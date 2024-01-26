<script setup lang="ts">
const { query } = defineProps(['query'])
const pageSize = ref(6)
const currentPage = ref({ page: parseInt(query.page) })

const { data } = await useFetch('/api/issues/issues-count')

const pages = computed(() => {
  const pageCount = Math.ceil(data.value! / pageSize.value)
  if (pageCount <= 1) return null
  const totalPages = Array.from({ length: pageCount + 1 }, (v, i) => i).filter(
    Boolean
  )
  return totalPages
})
</script>

<template>
  <div class="flex items-center justify-between border-t border-gray-200 py-5">
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
          v-for="page in pages"
        >
          <NuxtLink
            :href="`${page === 1 ? '/issues' : `/issues?page=${page}`}`"
            aria-current="page"
            @click="currentPage.page = page"
            :class="[
              page === currentPage.page
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
