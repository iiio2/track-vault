<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { status } = useAuth()

const links = [
  { path: '/', label: 'Dashboard' },
  { path: '/issues', label: 'Issues' },
]
const route = useRoute()
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow mb-5" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              :key="link.path"
              v-for="link in links"
              :to="link.path"
              :class="[
                route.path === link.path ? 'border-b-2 border-indigo-500 ' : '',
                'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900',
              ]"
              >{{ link.label }}</NuxtLink
            >
            <a
              v-if="status === 'unauthenticated'"
              href="/api/auth/signin"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >Login</a
            >
            <a
              v-if="status === 'authenticated'"
              href="/api/auth/signout"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >Logout</a
            >
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          as="a"
          href="/"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Dashboard</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/issues"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Issues</DisclosureButton
        >
        <DisclosureButton
          v-if="status === 'unauthenticated'"
          as="a"
          href="/api/auth/signin"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Login</DisclosureButton
        >
        <DisclosureButton
          v-if="status === 'authenticated'"
          as="a"
          href="/api/auth/signout"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >Logout</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
