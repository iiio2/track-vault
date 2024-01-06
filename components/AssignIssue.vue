<script setup lang="ts">
const { data: users } = await useFetch('/api/users/users')
const { data, assignIssue } = defineProps(['data', 'assignIssue'])
const selected = ref(data.issue.assignedUserId! || '')
</script>

<template>
  <div>
    <select
      v-model="selected"
      id="users"
      name="users"
      class="border-2 border-solid rounded-xl bg-transparent py-1.5 px-2 text-gray-900"
      @change="assignIssue(selected)"
    >
      <option disabled value="">Assign Issue</option>
      <option v-for="user of users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>
