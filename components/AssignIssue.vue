<script setup lang="ts">
const { data: users } = await useFetch('/api/users/users')
</script>

<template>
  <div>
    <select
      id="location"
      name="location"
      class="border-2 border-solid rounded-xl bg-transparent py-1.5 px-2 text-gray-900"
    >
      <option disabled selected>Assign Issue</option>
      <option v-for="user of users">{{ user.name }}</option>
    </select>
  </div>
</template>
