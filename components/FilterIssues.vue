<script setup lang="ts">
const selected = ref('')
const router = useRouter()
const statusList = {
  ALL: 'all',
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  CLOSED: 'closed',
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
      <option disabled value="">{{ $t('filter_by_status') }}</option>
      <option v-for="(status, item) in statusList" :value="item">
        {{ $t(status) }}
      </option>
    </select>
  </div>
</template>
