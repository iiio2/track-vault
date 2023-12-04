<script setup lang="ts">
import { Status } from '@prisma/client'

const selected = ref('')
const router = useRouter()
const statusList = {
  ALL: 'ALL',
  ...Status,
}
</script>

<template>
  <div>
    <select
      v-model="selected"
      @change="
        selected === 'ALL'
          ? router.push(`/issues`)
          : router.push(`/issues?status=${selected}`)
      "
      class="border-2 border-solid rounded-xl bg-transparent py-1.5 px-2 text-gray-900"
    >
      <option disabled value="">Filter by Status</option>
      <option v-for="status in statusList" :value="status">
        {{ status }}
      </option>
    </select>
  </div>
</template>
